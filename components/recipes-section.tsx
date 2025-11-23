"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Recipe {
  id: number
  title: string
  description: string
  ingredients: string[]
  instructions: string[]
  prep_time?: number
  cook_time?: number
  servings?: number
  category?: string
  image_url?: string
}

export function RecipesSection() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log("[v0] Fetching recipes from API...")
        const response = await fetch("/api/recipes")

        if (!response.ok) {
          console.error("[v0] API returned error status:", response.status)
          setRecipes([])
          return
        }

        const data = await response.json()
        console.log("[v0] Received recipes:", data.recipes?.length || 0)
        setRecipes(data.recipes || [])
      } catch (error) {
        console.error("[v0] Error fetching recipes:", error)
        setRecipes([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-muted-foreground">Cargando recetas...</div>
      </div>
    )
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No hay recetas disponibles aún.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Recetas Destacadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.slice(0, 2).map((recipe) => (
          <div
            key={recipe.id}
            className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-48 bg-neutral-200 relative flex items-center justify-center overflow-hidden">
              {recipe.image_url ? (
                <img
                  src={recipe.image_url || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-muted-foreground text-center px-4">Foto de {recipe.title}</span>
              )}
            </div>

            {/* Recipe info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <p className="text-muted-foreground mb-4">{recipe.description}</p>

              {/* Optional recipe meta */}
              {(recipe.prep_time || recipe.cook_time || recipe.servings) && (
                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  {recipe.prep_time && <span>⏱️ Prep: {recipe.prep_time}min</span>}
                  {recipe.cook_time && <span>🔥 Cocción: {recipe.cook_time}min</span>}
                  {recipe.servings && <span>👥 {recipe.servings} porciones</span>}
                </div>
              )}

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href={`/receta/${recipe.id}`}>Ver Receta</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
