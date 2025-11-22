import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, Sun, Download, Quote, Activity, Heart } from "lucide-react"

export default function ConsejosPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-b from-accent/10 to-background py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Consejos y Motivación</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pequeños pasos diarios para grandes cambios. Inspiración y herramientas prácticas para tu camino.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container px-4 mx-auto">
        {/* Quote Section */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <div className="relative bg-card p-10 rounded-3xl shadow-lg border border-border/50">
            <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />
            <p className="text-2xl md:text-3xl font-serif italic text-foreground/80 mb-6">
              "Tu diagnóstico no te define, es solo el comienzo de un viaje hacia un mayor autoconocimiento y cuidado
              personal."
            </p>
            <span className="font-bold text-primary">— Hipotiroidismo Consciente</span>
          </div>
        </div>

        {/* Tips Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center">Tips Diarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
            <Sun className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Rutina Matutina</h3>
            <p className="text-muted-foreground">
              Espera al menos 30-60 minutos después de tu medicación antes de desayunar o tomar café para asegurar su
              absorción.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <Activity className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Movimiento Suave</h3>
            <p className="text-muted-foreground">
              El yoga o caminatas suaves son mejores que el cardio intenso si estás con fatiga adrenal. Escucha a tu
              cuerpo.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <Heart className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Gestión del Estrés</h3>
            <p className="text-muted-foreground">
              El estrés impacta directamente en tu tiroides. Dedica 5 minutos al día a respirar conscientemente.
            </p>
          </div>
        </div>

        {/* Downloadable */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Mini Guía de Inicio</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Descarga nuestra guía gratuita con los 5 pilares básicos para empezar tu camino.
            </p>
            <Button className="gap-2">
              <Download className="h-4 w-4" /> Descargar PDF Gratuito
            </Button>
          </div>
          <div className="w-full md:w-1/3 bg-white h-48 rounded-xl shadow-sm flex items-center justify-center border border-border">
            <span className="text-muted-foreground">Vista previa del PDF</span>
          </div>
        </div>

        <div className="mt-12 text-center">
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
