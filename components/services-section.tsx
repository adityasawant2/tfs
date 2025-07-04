"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, Smartphone, Palette, Users, Shield, Target, Video, Scale, Brain, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import React from "react"
import clsx from 'clsx'

// Visually appealing bullet list component
type BulletListProps = {
  items: string[];
  iconColor?: string;
};
function BulletList({ items, iconColor }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item: string, idx: number) => (
        <li key={idx} className="flex items-start gap-2 text-neutral-200 text-base font-normal">
          <CheckCircle className={`w-4 h-4 mt-1 flex-shrink-0 stroke-2 ${iconColor ?? 'text-blue-600'}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Animated particles background component
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    // Particle config
    const numParticles = Math.floor(width / 12);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.2 + Math.random() * 1.8,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      opacity: 0.22 + Math.random() * 0.22,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(180,200,255,${p.opacity})`;
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
    }

    function animate() {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    function handleResize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Performance Marketing",
      description: "Drive measurable results and maximize ROI with our targeted performance marketing strategies.",
      gradient: "from-red-500 to-pink-500",
      details: (
        <BulletList
          items={[
            "Data-driven campaigns to optimize ad spend and improve ROI",
            "Advanced targeting to reach the right audience at the right time",
            "Continuous monitoring and optimization for maximum impact",
          ]}
          iconColor="text-pink-500"
        />
      ),
    },
    {
      icon: BarChart3,
      title: "Digital Marketing & Dashboard Analytics",
      description: "Expert digital management and analytics for business growth.",
      gradient: "from-blue-500 to-cyan-500",
      details: (
        <BulletList
          items={[
            "Expert digital management and growth strategies",
            "Analytics and optimization",
            "Targeted campaigns for maximum engagement",
            "Develop a strong brand identity",
            "Meta ad campaigns",
            "Social media management",
            "Graphic designing",
            "Client referrals and testimonials",
          ]}
          iconColor="text-cyan-500"
        />
      ),
    },
    {
      icon: Smartphone,
      title: "Web & App Development",
      description: "Custom web and app solutions tailored to your business needs.",
      gradient: "from-green-500 to-emerald-500",
      details: (
        <BulletList
          items={[
            "Responsive web design and development",
            "Custom mobile app development",
            "E-commerce solutions and integrations",
          ]}
          iconColor="text-emerald-500"
        />
      ),
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Stunning visuals that capture attention and convey your message.",
      gradient: "from-purple-500 to-violet-500",
      details: (
        <BulletList
          items={[
            "Brand identity and logo design",
            "Marketing materials and infographics",
            "UI/UX design for digital products",
          ]}
          iconColor="text-violet-500"
        />
      ),
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Comprehensive consulting for business growth and expansion.",
      gradient: "from-orange-500 to-amber-500",
      details: (
        <BulletList
          items={[
            "Go-to-market strategies",
            "Business expansion",
            "Software solutions",
            "Indian market strategy",
            "Domestic/global expansion",
            "Software and hardware maintenance",
            "HR services",
            "Virtual CFO",
            "Cultural nuances",
          ]}
          iconColor="text-amber-500"
        />
      ),
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protect your business with robust cybersecurity solutions.",
      gradient: "from-gray-600 to-gray-800",
      details: (
        <BulletList
          items={[
            "Comprehensive security assessments",
            "Advanced threat detection and mitigation",
            "24/7 monitoring and incident response",
          ]}
          iconColor="text-gray-400"
        />
      ),
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Strategic solutions to elevate your online presence and drive business growth.",
      gradient: "from-indigo-500 to-blue-600",
      details: (
        <BulletList
          items={[
            "Comprehensive website development",
            "Effective digital management",
            "Targeted lead generation",
            "Optimized SEO & Google AdWords campaigns",
            "Strategic online advertising campaigns",
            "Cost-effective pay-per-click (PPC) advertising",
            "Influencer marketing initiatives",
            "In-depth market research & analysis",
          ]}
          iconColor="text-blue-500"
        />
      ),
    },
    {
      icon: Video,
      title: "Content Production",
      description: "Professional content creation for your brand.",
      gradient: "from-teal-500 to-green-600",
      details: (
        <BulletList
          items={[
            "Professional copywriting",
            "Detailed company profiles",
            "Impactful press releases",
            "Creative digital content",
          ]}
        />
      ),
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Expert legal support tailored to your business needs.",
      gradient: "from-slate-600 to-slate-800",
      details: (
        <BulletList
          items={[
            "Contract review and drafting",
            "Compliance and risk management",
            "Intellectual property protection",
            "Employment law advisory",
          ]}
        />
      ),
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "Harness the power of generative AI for your business.",
      gradient: "from-pink-500 to-rose-500",
      details: (
        <BulletList
          items={[
            "Automated content creation",
            "AI-powered data insights",
            "Custom AI models and solutions",
            "Streamlined business workflows",
          ]}
        />
      ),
    },
  ]

  const [selected, setSelected] = useState(0)

  return (
    <section
      id="services"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Visible SVG grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='40' height='40' fill='none'/><path d='M 40 0 L 0 0 0 40' stroke='rgba(120,120,140,0.18)' stroke-width='1'/></svg>")`,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Animated particles background */}
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4 relative z-10 max-w-7xl"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive your digital transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 md:gap-12 items-start">
          {/* Service List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full md:w-auto"
          >
            <div className="rounded-2xl shadow-2xl bg-black/40 border border-blue-500/20 backdrop-blur-md overflow-hidden">
              {services.map((service, idx) => (
                <button
                  key={service.title}
                  onClick={() => setSelected(idx)}
                  className={clsx(
                    'w-full text-left px-8 py-5 flex items-center gap-5 transition-all duration-200 group',
                    'font-semibold text-lg tracking-wide',
                    idx === selected
                      ? 'bg-blue-500/10 border-l-4 border-blue-400 text-blue-100 shadow-xl scale-[1.03]'
                      : 'text-blue-200 hover:bg-blue-500/5',
                  )}
                  style={{ outline: 'none' }}
                >
                  <span
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r shadow-lg ring-2 ring-blue-500/20 transition-transform duration-200',
                      service.gradient,
                      idx === selected ? 'scale-110' : 'group-hover:scale-105',
                    )}
                  >
                    {React.createElement(service.icon, { className: 'w-7 h-7 text-white drop-shadow-lg' })}
                  </span>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="w-full md:w-auto"
          >
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="relative overflow-hidden rounded-3xl bg-black/50 border border-blue-500/20 shadow-2xl p-8 md:p-14 flex flex-col items-center text-center backdrop-blur-xl ring-1 ring-blue-500/10 min-h-[420px]"
            >
              {/* Blurred background for Performance Marketing */}
              {selected === 0 && (
                <div className="absolute inset-0 w-full h-full z-0">
                  <img
                    src="/perf_mark.jpg"
                    alt="Performance Marketing Background"
                    className="w-full h-full object-cover opacity-50 blur scale-110"
                    style={{ pointerEvents: 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className={clsx(
                  'w-24 h-24 rounded-full flex items-center justify-center mb-7 bg-gradient-to-r shadow-2xl ring-4 ring-blue-500/20',
                  services[selected].gradient
                )}>
                  {React.createElement(services[selected].icon, { className: 'w-14 h-14 text-white drop-shadow-lg' })}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
                  {services[selected].title}
                </h3>
                <p className="text-lg md:text-xl text-blue-100 mb-4 max-w-2xl drop-shadow">
                  {services[selected].description}
                </p>
                <div className="mt-2 text-base md:text-lg text-blue-100 text-left w-full max-w-2xl mx-auto">
                  {services[selected].details}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
