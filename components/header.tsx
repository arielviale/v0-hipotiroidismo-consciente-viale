"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Alimentación", href: "/alimentacion" },
    { label: "Salud", href: "/salud" },
    { label: "Consejos", href: "/consejos" },
    { label: "Comunidad", href: "/comunidad" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12">
              <Image
                src="/images/whatsapp-20image-202025-10-18-20at-201.jpeg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-gradient hidden sm:inline">Hipotiroidismo Consciente</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="gradient-warm text-white" asChild>
              <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                Síguenos
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full gradient-warm text-white" asChild>
              <a href="https://www.facebook.com/728575680337365" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                Síguenos en Facebook
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
