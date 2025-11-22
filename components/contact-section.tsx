import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Facebook, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Contáctanos</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            ¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all hover:scale-105 border-2">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Email</h3>
              <p className="text-muted-foreground text-sm">Envíanos un mensaje directo</p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="mailto:hipotiroidismo.consciente25@gmail.com">Enviar Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 border-2">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Facebook className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Facebook</h3>
              <p className="text-muted-foreground text-sm">Síguenos en redes sociales</p>
              <Button className="w-full gradient-warm text-white" asChild>
                <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                  Visitar Página
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 border-2">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Comunidad</h3>
              <p className="text-muted-foreground text-sm">Únete a nuestra comunidad</p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="#comunidad">Ver Testimonios</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
