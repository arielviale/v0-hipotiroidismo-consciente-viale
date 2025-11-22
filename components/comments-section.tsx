"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Comment {
  id: number
  name: string
  message: string
  created_at: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInMinutes < 1) return "Ahora"
  if (diffInMinutes < 60) return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? "s" : ""}`
  if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`
  if (diffInDays < 7) return `Hace ${diffInDays} día${diffInDays > 1 ? "s" : ""}`
  if (diffInDays < 30) return `Hace ${Math.floor(diffInDays / 7)} semana${Math.floor(diffInDays / 7) > 1 ? "s" : ""}`

  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setIsLoading(true)
      console.log("[v0] Fetching comments from API...")
      const response = await fetch("/api/comments")

      if (!response.ok) {
        console.error("[v0] API returned error status:", response.status)
        const text = await response.text()
        console.error("[v0] Response text:", text)
        setComments([])
        return
      }

      const data = await response.json()
      console.log("[v0] Received comments:", data.comments?.length || 0)
      setComments(data.comments || [])
    } catch (error) {
      console.error("[v0] Error fetching comments:", error)
      setComments([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)
    setErrorMessage("")

    if (!name.trim() || name.trim().length < 2) {
      setSubmitStatus("error")
      setErrorMessage("El nombre debe tener al menos 2 caracteres")
      return
    }

    if (!message.trim() || message.trim().length < 10) {
      setSubmitStatus("error")
      setErrorMessage("El mensaje debe tener al menos 10 caracteres")
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setComments([data.comment, ...comments])
        setName("")
        setMessage("")
        setSubmitStatus("success")
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Error al guardar el comentario")
      }
    } catch (error) {
      console.error("[v0] Error submitting comment:", error)
      setSubmitStatus("error")
      setErrorMessage("Error de conexión. Por favor, intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="comunidad" className="py-16 md:py-24">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Comunidad y Testimonios</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Comparte tu experiencia y conecta con otros en su camino hacia el bienestar
          </p>
        </div>

        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle>Comparte tu experiencia</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitStatus === "success" && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    ¡Gracias! Tu comentario ha sido publicado exitosamente.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">{errorMessage}</AlertDescription>
                </Alert>
              )}

              <div>
                <Input
                  placeholder="Tu nombre o alias"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  className="text-base"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Comparte tu experiencia, pregunta o mensaje (mínimo 10 caracteres)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  minLength={10}
                  rows={4}
                  className="text-base resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publicando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Publicar Comentario
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-6">Testimonios de la Comunidad ({comments.length})</h3>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : comments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Sé el primero en compartir tu experiencia</p>
              </CardContent>
            </Card>
          ) : (
            comments.map((comment) => (
              <Card key={comment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {comment.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-lg">{comment.name}</h4>
                        <span className="text-sm text-muted-foreground">{formatDate(comment.created_at)}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{comment.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
