import { Card, CardContent } from "@/components/ui/card"
import { Target, Sparkles } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mision" className="py-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card via-primary/5 to-secondary/5 shadow-2xl overflow-hidden">
            {/* Barra decorativa superior */}
            <div className="h-2 gradient-rainbow" />

            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-warm shadow-lg">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl md:text-4xl font-bold text-balance">Nuestra Misión</h2>
                  </div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-pretty font-medium">
                    Empoderarte con información clara y herramientas prácticas para que lleves un estilo de vida
                    saludable sin sentirte restringida o sola en el proceso.
                  </p>
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <p className="text-base text-muted-foreground italic flex items-center gap-2 justify-center md:justify-start">
                      <span className="text-2xl">🌿</span>
                      <span>Firmado: Hipotiroidismo Consciente</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
