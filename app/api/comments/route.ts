import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.NEON_DATABASE_URL!)

async function ensureTableExists() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("[v0] Comments table verified/created")
  } catch (error) {
    console.error("[v0] Error ensuring table exists:", error)
    throw error
  }
}

export async function GET() {
  try {
    console.log("[v0] Fetching comments from database...")
    console.log("[v0] Database URL exists:", !!process.env.NEON_DATABASE_URL)

    await ensureTableExists()

    const comments = await sql`
      SELECT id, name, message, created_at
      FROM comments
      ORDER BY created_at DESC
      LIMIT 50
    `

    console.log("[v0] Successfully fetched", comments.length, "comments")
    return NextResponse.json({ comments })
  } catch (error) {
    console.error("[v0] Error fetching comments:", error)
    return NextResponse.json(
      {
        error: "Error al cargar comentarios",
        comments: [],
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json()

    console.log("[v0] Creating comment from:", name)

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "El nombre debe tener al menos 2 caracteres" }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres" }, { status: 400 })
    }

    await ensureTableExists()

    const result = await sql`
      INSERT INTO comments (name, message)
      VALUES (${name.trim()}, ${message.trim()})
      RETURNING id, name, message, created_at
    `

    console.log("[v0] Comment created successfully:", result[0].id)
    return NextResponse.json({ comment: result[0] })
  } catch (error) {
    console.error("[v0] Error creating comment:", error)
    return NextResponse.json(
      { error: "Error al guardar comentario", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
