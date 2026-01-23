import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()

    console.log("[v0] Fetching recipes from database...")

    // Fetch recipes from database
    const { data: recipes, error } = await supabase
      .from("recipes")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching recipes:", error)
      return NextResponse.json({ error: "Error al cargar recetas", details: error.message }, { status: 500 })
    }

    console.log("[v0] Successfully fetched recipes:", recipes?.length || 0)
    return NextResponse.json({ recipes: recipes || [] })
  } catch (error) {
    console.error("[v0] Error in recipes API:", error)
    return NextResponse.json({ error: "Error al cargar recetas", details: String(error) }, { status: 500 })
  }
}
