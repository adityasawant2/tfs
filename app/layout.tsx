import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'TFS',
  description: 'TFS Landing page',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
