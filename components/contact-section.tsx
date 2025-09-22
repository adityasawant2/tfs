"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "./particles-background"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 76686 28401", "+91 96191 18118"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["parth@teamfullstack.in"],
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 96191 18118"],
      action: "Chat Now",
    },
  ]

  const offices = [
    {
      title: "Thane Office",
      address:
        "3/403 Chhaya Bldg, Vasant Leela, B/h Vijay Nagari Annex, Waghbil, GN Road, Thane (West) 400615",
    },
    {
      title: "Head Office (Mumbai)",
      address:
        "Unit G22, Kohinoor City Mall, Kohinoor City, Kurla (West) 400070 Mumbai",
    },
  ]

  return (
    <section
      id="contact"
      className="relative pt-8 pb-20 bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Animation */}
      <ParticlesBackground />

      {/* Unique Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-blue-700/60 via-purple-600/40 to-transparent blur-xl animate-gradient-move" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Get In Touch
          </h2>
          <div
            className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          ></div>
          <p
            className="text-base md:text-lg text-blue-200 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            We'd love to hear from you. Fill out the form and our team will get
            back to you soon!
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 items-stretch w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center w-full max-w-full md:max-w-lg mx-auto md:mx-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="bg-black/60 rounded-2xl shadow-xl border border-blue-900/20 p-6 sm:p-8 md:p-10 w-full">
              <h3 className="text-xl font-semibold text-blue-100 mb-6 text-center">
                Send us a message
              </h3>
              <form className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="First Name"
                    className="h-12 bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                  />
                  <Input
                    placeholder="Last Name"
                    className="h-12 bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="h-12 bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="h-12 bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                />
                <Input
                  placeholder="Company Name"
                  className="h-12 bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[100px] bg-neutral-900/80 text-blue-100 placeholder-blue-300 border-0 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
                />
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 transition text-lg text-white font-bold rounded-xl shadow-blue-700/20 shadow">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center gap-6 mt-8 md:mt-0 w-full max-w-full animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            {/* Contact Details with hover */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 
                             bg-black/60 rounded-xl p-5 shadow border border-blue-900/20 w-full 
                             transition-all duration-300 hover:border-blue-400/50 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mt-1">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-100 mb-1 text-base">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-blue-200 text-sm break-words leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-200 hover:bg-blue-600 hover:text-white bg-transparent rounded-lg ml-0 sm:ml-2 mt-3 sm:mt-0"
                  >
                    {info.action}
                  </Button>
                </div>
              ))}
            </div>

            {/* Offices with hover */}
            <div className="space-y-4 mt-6">
              <h3 className="text-lg font-semibold text-blue-100 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                Our Offices
              </h3>
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-black/60 rounded-xl p-5 shadow border border-blue-900/20 w-full 
                             transition-all duration-300 hover:border-blue-400/50 hover:scale-[1.02]"
                >
                  <h4 className="font-semibold text-blue-100 mb-1 text-base">
                    {office.title}
                  </h4>
                  <p className="text-blue-200 text-sm break-words leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
