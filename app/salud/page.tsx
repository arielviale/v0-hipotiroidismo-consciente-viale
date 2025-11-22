import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Activity, ShieldCheck, Stethoscope } from "lucide-react"

export default function SaludPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-b from-secondary/10 to-background py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Salud Intestinal y Tiroidea</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entendiendo la conexión vital entre tu intestino y tu tiroides para recuperar tu bienestar integral.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-secondary/5 rounded-3xl p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-secondary">La Conexión Intestino-Tiroides</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ¿Sabías que gran parte de la conversión de hormonas tiroideas ocurre en tu intestino? Mantener una
              microbiota saludable es esencial para que tu medicación y tu propia tiroides funcionen correctamente.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <span>Reduce la inflamación sistémica</span>
              </li>
              <li className="flex items-center gap-3">
                <Activity className="h-6 w-6 text-secondary" />
                <span>Mejora la absorción de nutrientes clave</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-blue-500" /> Síntomas Comunes
              </h3>
              <p className="text-muted-foreground">
                Hinchazón, fatiga después de comer, estreñimiento o sensibilidades alimentarias pueden ser señales de
                alerta.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" /> Estrategias Naturales
              </h3>
              <p className="text-muted-foreground">
                Uso de probióticos, alimentos fermentados y caldos de hueso para reparar la barrera intestinal.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="ghost">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
