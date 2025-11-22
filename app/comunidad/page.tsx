import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { MessageCircle, Heart, Share2 } from "lucide-react"
import { StoryForm } from "@/components/story-form"
import { StoryList } from "@/components/story-list"

export default async function ComunidadPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Comunidad Cercana</h1>
          <p className="text-xl text-gray-600">
            Un espacio seguro para compartir tus experiencias, logros y aprendizajes. Aquí nos apoyamos mutuamente en
            nuestro camino de sanación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - Stories Feed */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Historias Recientes</h2>
              {!user && (
                <Button
                  asChild
                  variant="outline"
                  className="text-orange-600 border-orange-200 hover:bg-orange-50 bg-transparent"
                >
                  <Link href="/auth/login">Iniciar Sesión para Escribir</Link>
                </Button>
              )}
            </div>

            <StoryList />
          </div>

          {/* Sidebar - Write / Info */}
          <div className="space-y-6">
            <Card className="border-orange-100 shadow-md">
              <CardHeader className="bg-orange-50 rounded-t-lg">
                <CardTitle className="text-orange-700">Comparte tu Historia</CardTitle>
                <CardDescription>Tu experiencia puede inspirar a otros.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {user ? (
                  <StoryForm />
                ) : (
                  <div className="text-center space-y-4 py-4">
                    <p className="text-gray-600">
                      Para mantener nuestra comunidad segura y auténtica, necesitas iniciar sesión para publicar.
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                        <Link href="/auth/login">Iniciar Sesión</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/auth/sign-up">Registrarse</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-700 text-lg">Reglas de la Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <span>Sé amable y respetuoso con todos los miembros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Share2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <span>Comparte desde tu experiencia personal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <span>Ofrece apoyo y palabras de aliento.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
