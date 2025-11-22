"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { User, Calendar } from "lucide-react"

interface Story {
  id: number
  title: string
  content: string
  author_name: string
  created_at: string
}

export function StoryList() {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    try {
      const res = await fetch("/api/stories")
      if (!res.ok) throw new Error("Error al cargar historias")
      const data = await res.json()
      if (Array.isArray(data)) {
        setStories(data)
      }
    } catch (err) {
      setError("No se pudieron cargar las historias.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="h-24 bg-gray-100" />
            <CardContent className="h-32 bg-gray-50" />
          </Card>
        ))}
      </div>
    )
  }

  if (error) return <p className="text-center text-red-500 py-8">{error}</p>

  if (stories.length === 0) {
    return (
      <Card className="bg-gray-50 border-dashed border-2">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-gray-500 mb-2">Aún no hay historias publicadas.</p>
          <p className="font-medium text-orange-600">¡Sé el primero en compartir tu experiencia!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {stories.map((story) => (
        <Card key={story.id} className="hover:shadow-md transition-shadow border-orange-50 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-orange-300 to-pink-300" />
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <CardTitle className="text-xl text-gray-800">{story.title}</CardTitle>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{story.author_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(story.created_at), "d 'de' MMMM, yyyy", { locale: es })}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">{story.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
