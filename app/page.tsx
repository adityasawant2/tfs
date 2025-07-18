"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Zap,
  Brain,
  BarChart3,
  Palette,
  Shield,
  Code,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
  Award,
  ChevronRight,
  Play,
  Send,
  Hexagon,
  Triangle,
  Circle,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  Monitor,
  Smartphone,
} from "lucide-react"
import { motion } from "framer-motion"
import { ServicesSection } from "@/components/services-section"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies that deliver measurable results and ROI.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing & Analytics",
    description: "Comprehensive digital marketing with advanced dashboard analytics.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Web & App Development",
    description: "Custom web and mobile applications built with cutting-edge technology.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Creative visual solutions that capture your brand essence.",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Strategic IT consulting to optimize your business operations.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your digital assets.",
    gradient: "from-gray-600 to-blue-600",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic planning for digital transformation and growth.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Code,
    title: "Content Production",
    description: "High-quality content creation for all your marketing needs.",
    gradient: "from-teal-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Generative AI",
    description: "Advanced AI solutions that transform how you do business.",
    gradient: "from-blue-500 to-indigo-500",
  },
]

const reviews = [
  {
    name: "Rahul Singh",
    company: "Raunak Group",
    role: "CTO",
    rating: 5,
    text: "Team FullStack transformed our entire digital infrastructure. Their AI solutions increased our operational efficiency by 300%. Absolutely phenomenal work!",
    avatar: "RS",
  },
  {
    name: "Sunita Mukherjee",
    company: "Incred Research",
    role: "Head of Digital",
    rating: 5,
    text: "The web platform they built for us is not just beautiful—it's a conversion machine. Our online engagement skyrocketed by 400%.",
    avatar: "SM",
  },
  {
    name: "Rohit Saraf",
    company: "Axis Bank",
    role: "Security Director",
    rating: 5,
    text: "Their cybersecurity implementation is military-grade. We've had zero breaches since deployment. Peace of mind is priceless.",
    avatar: "RS",
  },
  {
    name: "Neha Kashyap",
    company: "Kotak Mahindra Bank",
    role: "Marketing Head",
    rating: 5,
    text: "SEO results beyond our wildest dreams! 500% increase in organic traffic and top rankings for all target keywords.",
    avatar: "NK",
  },
]

const clients = [
  "Raunak Group",
  "Incred Research",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "HDFC Bank",
  "ICICI Bank",
  "SBI",
  "Yes Bank",
  "IndusInd Bank",
  "Bajaj Finance",
  "Tata Motors",
  "Mahindra Group",
  "Reliance Industries",
  "Wipro",
  "TCS",
  "Infosys",
  "HCL Technologies",
  "Tech Mahindra",
  "L&T Infotech",
  "Mindtree",
  "Mphasis",
  "Hexaware",
  "Cyient",
  "Persistent Systems",
  "Zensar Technologies",
  "KPIT Technologies",
  "Sonata Software",
  "Birlasoft",
]

const achievements = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Building2, number: "28+", label: "Enterprise Partners" },
  { icon: Award, number: "15+", label: "Industry Awards" },
  { icon: TrendingUp, number: "99%", label: "Success Rate" },
]

const stats = [
  { number: "50+", label: "Projects Delivered", icon: Briefcase },
  { number: "98%", label: "Client Satisfaction", icon: Award },
  { number: "4+", label: "Years Experience", icon: Calendar },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const FloatingElement = ({
  children,
  delay = 0,
  duration = 6,
}: { children: React.ReactNode; delay?: number; duration?: number }) => (
  <div
    className="absolute animate-float opacity-20"
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </div>
)

const SectionDivider = ({ variant = "default" }: { variant?: "default" | "wave" | "diagonal" | "zigzag" }) => {
  const variants = {
    default: (
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    ),
    wave: (
      <div className="absolute inset-x-0 top-0 h-4 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path d="M0,10 Q300,0 600,10 T1200,10 V20 H0 Z" fill="url(#blueGradient)" className="opacity-30" />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    diagonal: (
      <div className="absolute inset-x-0 top-0 h-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -skew-y-1"></div>
      </div>
    ),
    zigzag: (
      <div className="absolute inset-x-0 top-0 h-6 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path
            d="M0,12 L100,0 L200,12 L300,0 L400,12 L500,0 L600,12 L700,0 L800,12 L900,0 L1000,12 L1100,0 L1200,12 V24 H0 Z"
            fill="url(#zigzagBlueGradient)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="zigzagBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  }

  return variants[variant]
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => {
      clearInterval(reviewInterval)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section - Enhanced with Advanced Animations */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-10 2xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic Gradient Mesh */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-cyan-500/5 animate-pulse"></div>
            <div
              className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-full blur-3xl animate-spin"
              style={{ animationDuration: "30s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-conic from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-full blur-3xl animate-spin"
              style={{ animationDuration: "25s", animationDirection: "reverse" }}
            ></div>
          </div>

          {/* Floating Orbs with Enhanced Movement */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-lg"
            style={{
              animation: "float 8s ease-in-out infinite, pulse 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="absolute bottom-32 left-32 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl"
            style={{
              animation: "float 6s ease-in-out infinite, pulse 4s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          ></div>

          {/* Enhanced Grid with Breathing Effect */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
            style={{
              animation: "pulse 4s ease-in-out infinite, breathe 8s ease-in-out infinite",
            }}
          ></div>

          {/* Enhanced Moving Particles */}
          {[
            { top: "25%", left: "25%", size: "w-2 h-2", color: "bg-blue-400", delay: "0s" },
            { top: "33%", right: "33%", size: "w-1 h-1", color: "bg-cyan-400", delay: "1s" },
            { bottom: "25%", left: "33%", size: "w-1.5 h-1.5", color: "bg-purple-400", delay: "2s" },
            { bottom: "33%", right: "25%", size: "w-2 h-2", color: "bg-indigo-400", delay: "1.5s" },
            { top: "50%", left: "50%", size: "w-1 h-1", color: "bg-blue-300", delay: "0.5s" },
            { top: "60%", left: "20%", size: "w-1.5 h-1.5", color: "bg-purple-300", delay: "2.5s" },
            { bottom: "40%", right: "60%", size: "w-1 h-1", color: "bg-cyan-300", delay: "3s" },
          ].map((particle, index) => (
            <div
              key={index}
              className={`absolute ${particle.size} ${particle.color} rounded-full animate-ping`}
              style={{
                ...particle,
                animationDelay: particle.delay,
                animationDuration: "3s",
              }}
            ></div>
          ))}

          {/* Floating Geometric Shapes with Enhanced Animation */}
          <div
            className="absolute bottom-40 right-1/4 w-6 h-6 border border-purple-400/30 rounded-full"
            style={{
              animation: "spin 15s linear infinite, float 6s ease-in-out infinite",
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-4 h-4 bg-cyan-400/20 rotate-12"
            style={{
              animation: "pulse 3s ease-in-out infinite, rotate 20s linear infinite",
              animationDelay: "2s",
            }}
          ></div>

          {/* Enhanced Gradient Waves */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"
              style={{
                animation: "pulse 6s ease-in-out infinite, float 12s ease-in-out infinite",
                animationDelay: "0s",
              }}
            ></div>
            <div
              className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"
              style={{
                animation: "pulse 8s ease-in-out infinite, float 10s ease-in-out infinite",
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-full blur-2xl"
              style={{
                animation: "pulse 10s ease-in-out infinite, scale 15s ease-in-out infinite",
                animationDelay: "2s",
              }}
            ></div>
          </div>

          {/* Enhanced Animated Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q200,50 400,100 T800,100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              style={{
                animation: "pulse 4s ease-in-out infinite, pathDraw 8s ease-in-out infinite",
              }}
            />
            <path
              d="M200,200 Q400,150 600,200 T1000,200"
              stroke="url(#lineGradient2)"
              strokeWidth="1.5"
              fill="none"
              style={{
                animation: "pulse 6s ease-in-out infinite, pathDraw 10s ease-in-out infinite",
                animationDelay: "1s",
              }}
            />
            <path
              d="M100,300 Q300,250 500,300 T900,300"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              style={{
                animation: "pulse 5s ease-in-out infinite, pathDraw 12s ease-in-out infinite",
                animationDelay: "2s",
              }}
            />
          </svg>

          {/* Enhanced Floating Code Elements */}
          {[
            { content: "<AI/>", position: "top-24 right-1/4", color: "text-blue-400/40", delay: "0.5s" },
            { content: "{ }", position: "bottom-32 left-1/4", color: "text-purple-400/40", delay: "1.5s" },
            { content: "</>", position: "top-1/2 left-1/5", color: "text-cyan-400/40", delay: "2.5s" },
            { content: "API", position: "bottom-1/4 right-1/3", color: "text-indigo-400/40", delay: "1s" },
            { content: "ML", position: "top-1/3 left-1/2", color: "text-blue-300/30", delay: "3s" },
            { content: "{ AI }", position: "bottom-1/3 right-1/2", color: "text-purple-300/30", delay: "2s" },
          ].map((code, index) => (
            <div
              key={index}
              className={`absolute ${code.position} ${code.color} font-mono text-xs`}
              style={{
                animation: "pulse 4s ease-in-out infinite, float 8s ease-in-out infinite",
                animationDelay: code.delay,
              }}
            >
              {code.content}
            </div>
          ))}

          {/* New: Constellation Effect */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Trusted by 50+ Enterprises
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span
                    className="inline-block opacity-0 animate-fade-in-up"
                    style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                  >
                    Digital
                  </span>{" "}
                  <span
                    className="inline-block opacity-0 animate-fade-in-up"
                    style={{ animationDelay: "0.4s", animationFillMode: "both" }}
                  >
                    Excellence
                  </span>
                  <span
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-0 animate-fade-in-up bg-[length:200%_100%]"
                    style={{ animationDelay: "0.6s", animationFillMode: "both" }}
                  >
                    Delivered
                  </span>
                </h1>
                <p
                  className="text-xl text-gray-300 leading-relaxed max-w-lg opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.8s", animationFillMode: "both" }}
                >
                  We partner with forward-thinking organizations to architect, build, and scale digital solutions that
                  drive measurable business growth and competitive advantage.
                </p>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xs mx-auto justify-center sm:max-w-none"
                style={{ animationDelay: "1s", animationFillMode: "both" }}
              >
                <Button
                  size="lg"
                  className="px-1 py-1 sm:px-4 sm:py-2 text-base bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-300/25 hover:shadow-yellow-300/40 hover:scale-105 transition-all duration-300 group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "1.1s", animationFillMode: "both" }}
                  onClick={() => scrollToSection("services")}
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-1 py-1 sm:px-4 sm:py-2 text-base border-2 border-blue-500/50 text-blue-300 hover:bg-white hover:text-blue-600 bg-transparent backdrop-blur-sm hover:border-blue-400/70 hover:scale-105 transition-all duration-300 group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "1.2s", animationFillMode: "both" }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Case Studies
                </Button>
              </div>

              {/* Enhanced Stats Row */}
              <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "1.2s", animationFillMode: "both" }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20 group-hover:bg-blue-500/30 group-hover:border-blue-400/40 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
              {/* Enhanced Project Dashboard */}
              <div className="relative z-10 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-md w-full mx-auto p-4 sm:p-6 md:p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      Project Dashboard
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">Live</Badge>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        icon: TrendingUp,
                        title: "Performance Marketing",
                        value: "+300% ROI",
                        gradient: "from-blue-600 to-blue-700",
                        delay: "0s",
                      },
                      {
                        icon: Monitor,
                        title: "Web Development",
                        value: "98% Uptime",
                        gradient: "from-indigo-600 to-blue-600",
                        delay: "0.2s",
                      },
                      {
                        icon: Shield,
                        title: "Cybersecurity",
                        value: "500 Risks Detected",
                        gradient: "from-gray-600 to-blue-600",
                        delay: "0.4s",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-blue-500/20 hover:border-blue-400/40 hover:bg-black/60 transition-all duration-300 group/item py-4"
                        style={{ animationDelay: item.delay }}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:justify-between">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-white group-hover/item:text-blue-200 transition-colors duration-300 sm:ml-4">
                            {item.title}
                          </span>
                          <span className="text-green-400 font-semibold group-hover/item:text-green-300 transition-colors duration-300 text-base whitespace-nowrap mt-1 sm:mt-0 sm:self-center sm:ml-auto sm:text-right">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* New: Mini Chart Visualization */}
                  <div className="mt-6 p-4 bg-black/20 rounded-xl border border-blue-500/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Growth Metrics</span>
                      <span className="text-xs text-green-400">↗ +24%</span>
                    </div>
                    <div className="flex items-end space-x-1 h-12">
                      {[40, 65, 45, 80, 60, 95, 75, 100].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-sm flex-1 opacity-80 hover:opacity-100 transition-opacity duration-300"
                          style={{
                            height: `${height}%`,
                            animation: `growUp 1s ease-out ${i * 0.1}s both`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Background Effects */}
              <div className="absolute -top-6 -right-6 w-80 h-80 bg-blue-500/10 rounded-full opacity-50 blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-60 h-60 bg-indigo-500/10 rounded-full opacity-50 blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full opacity-30 blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
      </section>

      {/* Client Showcase - Blue Gradient Background */}
      <section
        id="clients"
        className="relative py-20 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20"
      >
        <SectionDivider variant="wave" />

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <Hexagon className="w-20 h-20 text-blue-400" />
          </div>
          <div className="absolute top-32 right-20">
            <Triangle className="w-16 h-16 text-blue-500" />
          </div>
          <div className="absolute bottom-20 left-32">
            <Circle className="w-24 h-24 text-blue-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Industry Giants
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From startups to Fortune 500 companies, we've powered digital transformation across industries
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const gradients = [
                "from-pink-500 to-yellow-500",
                "from-blue-500 to-cyan-500",
                "from-green-500 to-emerald-500",
                "from-purple-500 to-indigo-500",
              ];
              return (
                <div
                  key={index}
                  className="text-center bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 shadow-lg shadow-blue-500/10"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full flex items-center justify-center`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-base md:text-lg font-semibold text-gray-300">{achievement.label}</div>
                </div>
              );
            })}
          </div>

          {/* Infinite Scroll */}
          <div className="relative overflow-hidden">
            <div className="client-slider-track">
              {[...Array(22).keys(), ...Array(22).keys()].map((i) => (
                <div
                  key={i + Math.random()}
                  className="flex-shrink-0 bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-8 py-6 min-w-[250px] hover:bg-black/60 transition-all duration-300 group shadow-lg shadow-blue-500/10 flex items-center justify-center"
                >
                  <img
                    src={`/${i + 1}.png`}
                    alt={`Client Logo ${i + 1}`}
                    className="h-28 w-auto md:h-32 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Black with Blue Spotlight Effect */}
      <section id="reviews" className="relative py-20 bg-black">
        <SectionDivider variant="wave" />

        {/* Spotlight Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-700/20 text-blue-300 border-blue-500/30">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it—hear from the industry leaders who've transformed their businesses with
              our solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="relative bg-gradient-to-br from-[#0a1626] to-[#101828] backdrop-blur-2xl border border-blue-900/60 overflow-hidden shadow-2xl shadow-blue-900/30 ring-1 ring-yellow-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-900/40"></div>
              <CardContent className="relative p-12 bg-black/40 rounded-xl">
                <div className="text-center">
                  {/* Gradient line above stars */}
                  <div className="mx-auto mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-60"></div>
                  <div className="flex justify-center mb-8 gap-1">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-3xl text-blue-200 mb-8 leading-relaxed font-light italic">
                    "{reviews[currentReviewIndex].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-6 mt-8">
                    {(() => {
                      const company = reviews[currentReviewIndex].company;
                      let logoSrc = null;
                      if (company === "Kotak Mahindra Bank") logoSrc = "/kotak.png";
                      else if (company === "Incred Research") logoSrc = "/incred.jpeg";
                      else if (company === "Axis Bank") logoSrc = "/axisbank.png";
                      else if (company === "Raunak Group") logoSrc = "/raunak.jpg";
                      return (
                        <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 border-4 border-yellow-300/30 overflow-hidden">
                          {logoSrc ? (
                            <img src={logoSrc} alt={company + ' logo'} className="w-full h-full object-contain" />
                          ) : (
                            <span className="text-white font-bold text-2xl">{reviews[currentReviewIndex].avatar}</span>
                          )}
                        </div>
                      );
                    })()}
                    <div className="text-left">
                      <div className="text-xl font-bold text-white">{reviews[currentReviewIndex].name}</div>
                      <div className="text-blue-300 font-medium">{reviews[currentReviewIndex].role}</div>
                      <div className="text-gray-400">{reviews[currentReviewIndex].company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 scale-125"
                      : "bg-gray-600 hover:bg-blue-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
