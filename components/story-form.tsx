"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Send } from "lucide-react"
import { useRouter } from "next/navigation"

export function StoryForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, author_name: authorName }),
      })

      if (!response.ok) throw new Error("Error al publicar la historia")

      setTitle("")
      setContent("")
      setAuthorName("")
      setSuccess(true)
      router.refresh()
    } catch (err) {
      setError("No se pudo publicar la historia. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-6 space-y-4">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <Send className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-green-700">¡Historia Publicada!</h3>
        <p className="text-gray-600">Gracias por compartir tu experiencia con la comunidad.</p>
        <Button variant="outline" onClick={() => setSuccess(false)} className="mt-2">
          Escribir otra
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="author">Tu Nombre (o Alias)</Label>
        <Input
          id="author"
          placeholder="Ej: María T."
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Título de tu Historia</Label>
        <Input
          id="title"
          placeholder="Ej: Mi diagnóstico fue el comienzo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Tu Historia</Label>
        <Textarea
          id="content"
          placeholder="Comparte tu experiencia, tus desafíos y tus victorias..."
          className="min-h-[200px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publicando...
          </>
        ) : (
          "Publicar Historia"
        )}
      </Button>
    </form>
  )
}
