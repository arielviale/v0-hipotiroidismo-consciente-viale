import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Heart, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Alimentación Consciente",
    description: "Recetas sin harinas ni azúcares refinados, con alternativas saludables y fáciles de preparar",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-500",
  },
  {
    icon: Heart,
    title: "Salud Intestinal y Tiroidea",
    description: "Estrategias para mejorar la digestión y apoyar la función tiroidea de manera natural",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    borderColor: "border-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Consejos Prácticos y Motivación",
    description: "Tips diarios, frases inspiradoras y mini guías descargables para acompañarte paso a paso",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-500",
  },
  {
    icon: Users,
    title: "Comunidad Cercana",
    description: "Un espacio seguro para compartir experiencias, dudas y logros con otras personas que viven lo mismo",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    borderColor: "border-red-500",
  },
]

export function AboutSection() {
  return (
    <section id="que-encontraras" className="py-16 md:py-24 relative bg-background">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">Qué Encontrarás Aquí</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty leading-relaxed">
            Todo lo que necesitas para cuidar tu salud de manera consciente y equilibrada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Link key={feature.title} href="#" className="block group">
              <Card
                className={`h-full border-4 ${feature.borderColor} bg-white hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden rounded-3xl`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Icono circular */}
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
                    </div>

                    {/* Contenido */}
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
