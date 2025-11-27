import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: stories, error } = await supabase
      .from("stories")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50)

    if (error) {
      console.error("Error fetching stories:", error)
      return NextResponse.json({ error: "Error fetching stories" }, { status: 500 })
    }

    return NextResponse.json(stories)
  } catch (error) {
    console.error("Error fetching stories:", error)
    return NextResponse.json({ error: "Error fetching stories" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, content, author_name } = await request.json()

    if (!title || !content || !author_name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("stories")
      .insert({
        user_id: user.id,
        author_name,
        title,
        content,
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating story:", error)
      return NextResponse.json({ error: "Error creating story", details: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating story:", error)
    return NextResponse.json({ error: "Error creating story" }, { status: 500 })
  }
}
