import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Heart, Lightbulb, Users, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Alimentación Consciente",
    description: "Recetas sin harinas ni azúcares refinados, con alternativas saludables y fáciles de preparar",
    gradient: "from-primary/10 to-accent/10",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    href: "/alimentacion",
  },
  {
    icon: Heart,
    title: "Salud Intestinal y Tiroidea",
    description: "Estrategias para mejorar la digestión y apoyar la función tiroidea de manera natural",
    gradient: "from-secondary/10 to-primary/10",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    href: "/salud",
  },
  {
    icon: Lightbulb,
    title: "Consejos Prácticos y Motivación",
    description: "Tips diarios, frases inspiradoras y mini guías descargables para acompañarte paso a paso",
    gradient: "from-accent/10 to-secondary/10",
    iconBg: "bg-accent/10",
    iconColor: "text-accent-foreground",
    href: "/consejos",
  },
  {
    icon: Users,
    title: "Comunidad Cercana",
    description: "Un espacio seguro para compartir experiencias, dudas y logros con otras personas que viven lo mismo",
    gradient: "from-chart-4/10 to-chart-5/10",
    iconBg: "bg-chart-4/10",
    iconColor: "text-chart-4",
    href: "#comunidad", // Maintains link to comments section on homepage
  },
]

export function AboutSection() {
  return (
    <section id="que-encontraras" className="py-16 md:py-24 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
              Nuestros Pilares
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Qué Encontrarás Aquí</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Todo lo que necesitas para cuidar tu salud de manera consciente y equilibrada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href} className="block group">
              <Card className="h-full border-2 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardContent className="pt-6 relative z-10 h-full flex flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  {feature.href !== "#comunidad" && (
                    <div className="mt-4 flex justify-end">
                      <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 flex items-center gap-1">
                        Ver más <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
