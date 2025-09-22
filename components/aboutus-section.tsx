"use client"

import { motion } from "framer-motion"
import {Facebook, Instagram, Linkedin } from "lucide-react"
import { ParticlesBackground } from "./particles-background" // ✅ Import here

export function AboutUsSection() {
  return (
    <section id="aboutus" className="py-20 relative overflow-hidden bg-black">
      {/* ✨ Background Animation */}
      <ParticlesBackground />

      <div className="container mx-auto px-6 text-center relative z-10">
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
          About Us
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-blue-200 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          We are a team of passionate developers, designers, and strategists 
          committed to delivering world-class digital solutions. Our mission 
          is to help businesses scale with technology, creativity, and innovation.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", text: "To empower businesses with digital excellence." },
            { title: "Our Vision", text: "To be the most trusted partner in digital innovation." },
            { title: "Our Values", text: "Integrity, Creativity, and Customer Success." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
            >
              {/* Heading */}
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-base md:text-lg text-blue-200 leading-relaxed text-center">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-10">

            {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/people/Team-FullStack/61552177225006/?mibextid=ZbWKwL" // 🔗 replace with your actual FB link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <Facebook className="w-6 h-36" />
            <span className="text-lg font-medium">Facebook</span>
          </motion.a>





          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/team.fullstack"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <Instagram className="w-6 h-36" />
            <span className="text-lg font-medium">Instagram</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/company/team-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-36" />
            <span className="text-lg font-medium">LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
