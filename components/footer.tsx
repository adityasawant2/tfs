"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Performance Marketing",
    "Web Development",
    "Cyber Security",
    "Generative AI",
    "Digital Strategy",
    "Consulting",
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative py-16 bg-black border-t border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Team FullStack Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Pioneering the future of digital transformation with cutting-edge AI solutions and innovative
              technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">AI Innovation</Badge>
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Digital Excellence</Badge>
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Future Ready</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "Services", "Reviews", "Contact"].map((link) => (
                link === "Services" || link === "Contact" ? (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 text-left"
                  >
                    {link}
                  </Link>
                ) : (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 text-left"
                  >
                    {link}
                  </button>
                )
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <div className="space-y-3 text-sm">
              {["AI Solutions", "Web Development", "Cyber Security", "Digital Marketing", "Consulting"].map(
                (service) => (
                  <p key={service} className="text-gray-300 hover:text-blue-300 transition-colors cursor-pointer">
                    {service}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Team FullStack. All rights reserved. Transforming businesses with AI innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
