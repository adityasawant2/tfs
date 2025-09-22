// components/casestudies-section.tsx
"use client"

import { motion } from "framer-motion"
import { ParticlesBackground } from "./particles-background"

const caseStudies = [
  {
    name: "Rahul Singh",
    company: "Raunak Group",
    text: "Working with Team FullStack has been a game-changer for our business. Their IT solutions streamlined our operations, resulting in significant cost savings. Their team's expertise and dedication to our success are truly commendable."
  },
  {
    name: "Sunita Mukherjee",
    company: "Incred Research",
    text: "Team FullStack's web development expertise took our online presence to a whole new level. They understood our vision and delivered a website that not only looks amazing but also functions seamlessly. Their professionalism and responsiveness made the entire process a breeze."
  },
  {
    name: "Rohit Saraf",
    company: "Axis Bank",
    text: "Team FullStack's cybersecurity measures have provided us with a level of protection we didn't know was possible. Their proactive approach to identifying and mitigating potential threats has given us peace of mind. Their team is top-notch in the field."
  },
  {
    name: "Neha Kashyap",
    company: "Kotak Mahindra Bank",
    text: "We partnered with Team FullStack for their SEO services, and the results were outstanding. Our online visibility and organic traffic saw a remarkable increase. Their strategies are not only effective but also adaptable to our changing needs. I highly recommend their SEO expertise."
  },
]

export function CaseStudiesSection() {
  return (
    <section id="casestudies" className="py-20 bg-black relative overflow-hidden">
        {/* Background Animation */}
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
          Case Studies
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Discover what our clients say about working with Team FullStack —
          real stories of growth, trust, and successful partnerships.
        </motion.p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all text-left"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{cs.name}</h3>
              <p className="text-blue-300 font-medium mb-4">{cs.company}</p>
              <p className="text-base text-blue-200 leading-relaxed">{cs.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
