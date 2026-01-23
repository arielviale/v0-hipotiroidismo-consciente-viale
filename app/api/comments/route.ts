import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: comments, error } = await supabase
      .from("comments")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(50)

    if (error) {
      console.error("[v0] Error fetching comments:", error)
      return NextResponse.json(
        { error: "Error al cargar comentarios", comments: [], details: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json({ comments: comments || [] })
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

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "El nombre debe tener al menos 2 caracteres" }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres" }, { status: 400 })
    }

    const supabase = await createClient()
    const { data, error } = await supabase
      .from("comments")
      .insert({ name: name.trim(), message: message.trim() })
      .select("id, name, message, created_at")
      .single()

    if (error) {
      console.error("[v0] Error creating comment:", error)
      return NextResponse.json(
        { error: "Error al guardar comentario", details: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json({ comment: data })
  } catch (error) {
    console.error("[v0] Error creating comment:", error)
    return NextResponse.json(
      { error: "Error al guardar comentario", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
