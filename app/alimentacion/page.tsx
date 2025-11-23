import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChefHat, Leaf, Clock, CheckCircle } from "lucide-react"
import { RecipesSection } from "@/components/recipes-section"

export default function AlimentacionPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <ChefHat className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Alimentación Consciente</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recetas deliciosas sin harinas ni azúcares refinados. Porque cuidar tu tiroides no significa renunciar al
              sabor.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Natural</h3>
              <p className="text-muted-foreground">
                Ingredientes reales, sin procesados ni aditivos que inflamen tu cuerpo.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sin Gluten ni Azúcar</h3>
              <p className="text-muted-foreground">
                Alternativas seguras y deliciosas para mantener tu glucosa y tiroides felices.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fácil de Preparar</h3>
              <p className="text-muted-foreground">Recetas prácticas pensadas para el día a día, sin complicaciones.</p>
            </CardContent>
          </Card>
        </div>

        {/* Recipe Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <RecipesSection />
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
