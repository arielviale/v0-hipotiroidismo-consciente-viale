import { Facebook, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contacto" className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Hipotiroidismo Consciente</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tu espacio de acompañamiento hacia una vida más saludable, plena y equilibrada.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" />
                  Síguenos en Facebook
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="mailto:hipotiroidismo.consciente25@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Envíanos un email
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Únete</h3>
            <p className="text-muted-foreground leading-relaxed">
              Forma parte de nuestra comunidad y comparte tu experiencia con personas que entienden tu camino.
            </p>
          </div>
        </div>

        {/* Added Disclaimer section */}
        <div className="border-t py-8 my-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Descargo de Responsabilidad (Disclaimer)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La información proporcionada en este sitio web es únicamente con fines educativos e informativos y no
              sustituye el consejo médico profesional, diagnóstico o tratamiento. Siempre busca el consejo de tu médico
              u otro proveedor de salud calificado ante cualquier duda que puedas tener respecto a una condición médica.
              Nunca ignores el consejo médico profesional ni demores en buscarlo debido a algo que hayas leído en este
              sitio web.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-primary fill-primary" /> para la comunidad
          </p>
          <p className="mt-2 text-sm">© 2025 Hipotiroidismo Consciente Viale. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
