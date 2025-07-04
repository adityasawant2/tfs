"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");
      setIsMenuOpen(false);
    } else {
      if (typeof window !== 'undefined') {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-blue-500/20 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Team FullStack Logo" className="h-16 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ].map((item) => (
              item.name === "Home" ? (
                <button
                  key={item.name}
                  onClick={handleHomeClick}
                  className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              ) : item.id.startsWith("/") ? (
                <Link
                  key={item.name}
                  href={item.id}
                  className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              )
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-blue-500/50 text-blue-300 hover:bg-white hover:text-blue-600 bg-transparent backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 96191 18118
            </Button>
            <Link href="/contact">
              <Button className="bg-yellow-300 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-300/25">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <button className="lg:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-blue-500/20">
            <nav className="flex flex-col space-y-4">
              {["Home", "Services", "Contact"].map((item) => (
                item === "Home" ? (
                  <button
                    key={item}
                    onClick={handleHomeClick}
                    className="text-left text-gray-300 hover:text-white py-2 font-medium"
                  >
                    {item}
                  </button>
                ) : item === "Services" || item === "Contact" ? (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-left text-gray-300 hover:text-white py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-300 hover:text-white py-2 font-medium"
                  >
                    {item}
                  </button>
                )
              ))}
              <div className="pt-4 space-y-10">
                <Button variant="outline" className="w-full border-blue-500/50 text-blue-300 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Link href="/contact">
                  <Button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black mt-4">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
