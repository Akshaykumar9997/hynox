"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(9, 9, 9, 0)", "rgba(9, 9, 9, 0.8)"])
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])
  const height = useTransform(scrollY, [0, 100], ["100px", "80px"])

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Why HYNOX", href: "#why-hynox" },
    { name: "Case Studies", href: "#proof" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur, height }}
      className="fixed top-0 w-full z-50 border-b border-white/5 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className="text-2xl font-serif font-bold tracking-tighter group-hover:opacity-80 transition-opacity">
            HYNOX
          </span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-light -mt-1">
            Enterprise IT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="rounded-none border-white/10 px-8 py-6 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all bg-transparent"
          >
            Consultation
          </Button>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-6 md:hidden z-50 overflow-y-auto max-h-[calc(100vh-80px)]"
        >
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-tight text-white hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full rounded-none py-8 uppercase tracking-[0.2em] text-xs bg-white text-black hover:bg-white/90"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
