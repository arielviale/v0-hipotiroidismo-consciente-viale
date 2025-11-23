import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden mt-20 pb-0">
      <div className="min-h-[700px] bg-primary flex items-center justify-center">
        {/* Sección amarilla dorada con personaje */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-yellow-300 via-[#ffb800] to-yellow-300 rounded-[60px] relative shadow-2xl overflow-hidden">
            {/* Decorativo flotante */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />

            <div className="relative z-10 py-20 px-4 md:px-8">
              {/* Contenedor flexbox para personaje y texto */}
              <div className="flex flex-col items-center justify-center gap-8">
                {/* Personaje - Tiroides naranja */}
                <div className="relative w-full max-w-sm aspect-square">
                  <div
                    className="relative w-full h-full image-blur-fade"
                    style={{
                      maskImage: "radial-gradient(ellipse 60% 70% at center 45%, black 0%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse 60% 70% at center 45%, black 0%, transparent 100%)",
                    }}
                  >
                    <Image
                      src="/images/whatsapp-20image-202025-10-18-20at-201.jpeg"
                      alt="Hipotiroidismo Consciente - Personaje de tiroides feliz"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Texto - Título */}
                <div className="text-center">
                  <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="text-gray-900">Hipotiroidismo</span>
                    <br />
                    <span className="text-[#ff8c42]">Consciente</span>
                  </h1>
                </div>

                {/* Descripción y botones */}
                <div className="text-center space-y-6 max-w-2xl">
                  <p className="text-lg md:text-xl text-gray-700 font-medium">
                    Tu espacio de acompañamiento hacia una vida más saludable, plena y equilibrada
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-[#ff8c42] hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      asChild
                    >
                      <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                        Únete a la Comunidad
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-2 border-gray-900 text-gray-900 hover:bg-gray-900/5 transition-all hover:scale-105 bg-transparent"
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
          </div>
        </div>
      </div>

      {/* Onda decorativa en la parte inferior */}
      <div className="relative h-32 bg-primary overflow-hidden">
        {/* Turquoise wave */}
        <svg viewBox="0 0 1440 120" className="absolute inset-0 w-full h-full text-primary" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>

        {/* Yellow wave overlay */}
        <svg
          viewBox="0 0 1440 120"
          className="absolute inset-0 w-full h-full text-secondary"
          preserveAspectRatio="none"
          style={{ top: "12px", opacity: 0.7 }}
        >
          <path
            fill="currentColor"
            d="M0,60L48,65.3C96,71,192,81,288,75.5C384,70,480,50,576,48C672,45,768,55,864,56C960,57,1056,47,1152,45.3C1248,43,1344,53,1392,57.3L1440,61L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>

        {/* Orange wave overlay */}
        <svg
          viewBox="0 0 1440 120"
          className="absolute inset-0 w-full h-full text-accent"
          preserveAspectRatio="none"
          style={{ top: "24px", opacity: 0.5 }}
        >
          <path
            fill="currentColor"
            d="M0,55L48,60.3C96,65,192,75,288,70C384,65,480,45,576,43C672,41,768,51,864,52C960,53,1056,43,1152,40C1248,37,1344,43,1392,46.3L1440,49L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>

        {/* Cream/beige wave at bottom */}
        <svg
          viewBox="0 0 1440 120"
          className="absolute inset-0 w-full h-full text-background"
          preserveAspectRatio="none"
          style={{ top: "36px", opacity: 0.3 }}
        >
          <path
            fill="currentColor"
            d="M0,50L48,55.3C96,61,192,71,288,68C384,65,480,43,576,40C672,37,768,47,864,48C960,49,1056,39,1152,35C1248,31,1344,41,1392,44.3L1440,47L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
