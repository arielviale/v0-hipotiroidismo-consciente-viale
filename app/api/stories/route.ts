import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Ensure table exists
async function ensureTable() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    await sql`
      CREATE TABLE IF NOT EXISTS stories (
        id SERIAL PRIMARY KEY,
        user_id UUID NOT NULL,
        author_name TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `
  } catch (e) {
    console.error("Error ensuring stories table:", e)
  }
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: "Database not configured", stories: [] }, { status: 503 })
    }

    const sql = neon(process.env.DATABASE_URL)
    await ensureTable()
    const stories = await sql`SELECT * FROM stories ORDER BY created_at DESC LIMIT 50`
    return NextResponse.json(stories)
  } catch (error) {
    console.error("Error fetching stories:", error)
    return NextResponse.json({ error: "Error fetching stories" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 })
    }

    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const sql = neon(process.env.DATABASE_URL)
    await ensureTable()
    const { title, content, author_name } = await request.json()

    if (!title || !content || !author_name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO stories (user_id, author_name, title, content)
      VALUES (${user.id}, ${author_name}, ${title}, ${content})
      RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error creating story:", error)
    return NextResponse.json({ error: "Error creating story" }, { status: 500 })
  }
}
