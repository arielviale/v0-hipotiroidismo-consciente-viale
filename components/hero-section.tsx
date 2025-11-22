import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[600px] md:min-h-[500px] flex items-center overflow-hidden mt-20">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/20" />

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Personaje principal - Lado izquierdo */}
          <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl scale-75" />
            <div
              className="relative w-full h-full"
              style={{
                maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 80%)",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%201.32.17%20PM-I6DFy6CYADWpT1KBQkYmOBeTCaO2nQ.jpeg"
                alt="Hipotiroidismo Consciente - Personaje de tiroides feliz"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>

          {/* Contenido - Lado derecho */}
          <div className="space-y-6 text-center md:text-left">
            {/* Badge decorativo */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Tu camino hacia el bienestar</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-gradient">Hipotiroidismo Consciente</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 text-pretty leading-relaxed font-medium">
              Tu espacio de acompañamiento hacia una vida más saludable, plena y equilibrada
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Información confiable, recetas prácticas y consejos diarios que cuidan tu tiroides, tu intestino y tu
              bienestar general
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:justify-start justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 gradient-warm text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                  Únete a la Comunidad
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all hover:scale-105 bg-transparent"
                asChild
              >
                <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  Síguenos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 120" className="w-full h-full">
          <path
            fill="oklch(0.98 0.01 75)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
