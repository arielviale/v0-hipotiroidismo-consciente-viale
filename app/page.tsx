import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { CommentsSection } from "@/components/comments-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <CommentsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
