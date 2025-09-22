"use client"

import { motion } from "framer-motion"
import { ParticlesBackground } from "./particles-background"
import Image from "next/image"

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 relative">
      {/* Background Animation */}
      <ParticlesBackground />

      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-3 
                     bg-gradient-to-r from-blue-400 to-blue-600 
                     bg-clip-text text-transparent tracking-tight"
        >
          Industries We Serve
        </motion.h1>

        {/* Small Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-blue-200 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Partnering with leading brands across diverse industries, we deliver
          innovative solutions that drive growth, efficiency, and digital
          transformation.
        </motion.p>

        {/* Grid of 22 images → 5 per row on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-12">
          {Array.from({ length: 22 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Image
                src={`/${i + 1}.png`}
                alt={`Industry ${i + 1}`}
                width={200}
                height={100}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
