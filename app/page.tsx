"use client"

import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
  LayoutGrid,
  Check,
  AlertCircle,
  MessageSquare,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground mb-8 block opacity-0 animate-in fade-in slide-in-from-bottom-2 duration-1000 fill-mode-forwards">
              Legacy Infrastructure for Global Scaling
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-10 max-w-6xl mx-auto leading-[1.05] text-balance">
              Enterprise IT Systems & Dedicated Support for Scaling Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 font-light leading-relaxed">
              Reduce downtime, increase efficiency, and scale operations with HYNOX. Your trusted partner for
              high-ticket IT projects (₹80L–1Cr) and 24/7 dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="h-16 px-10 text-base bg-white text-black hover:bg-white/90 rounded-none group transition-all duration-500"
              >
                Book Free Enterprise IT Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link
                href="#solutions"
                className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors py-4"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. PROBLEM / PAIN POINTS */}
      <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5 relative">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-10 leading-tight">
                Why Businesses Struggle <br className="hidden sm:block" />
                With IT Systems
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12 font-light leading-relaxed">
                As enterprises scale beyond ₹100Cr, legacy technical debt and fragmented software become operational
                liabilities.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Critical Downtime",
                    desc: "Every hour of offline operations costs millions in lost productivity and trust.",
                  },
                  {
                    title: "Fragmented Ecosystems",
                    desc: "Siloed tools and disconnected software prevent real-time data flow.",
                  },
                  {
                    title: "No Dedicated Support",
                    desc: "Relying on generic support lines for mission-critical infrastructure.",
                  },
                  {
                    title: "Opaque Operational Costs",
                    desc: "Hidden technical debt leading to unpredictable scaling expenses.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="group border-l border-white/10 pl-8 hover:border-white/40 transition-colors"
                  >
                    <h3 className="text-lg font-medium mb-2 group-hover:translate-x-2 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  Without the right systems, scaling is risky and inefficient
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                <div className="space-y-4 sm:space-y-6 pt-0 sm:pt-12">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="aspect-square bg-white/5 border border-white/10 p-10 flex flex-col justify-between"
                  >
                    <Clock className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <p className="text-3xl font-serif mb-1 tracking-tighter">99.9%</p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Uptime Risk Without HYNOX
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="h-48 bg-white/5 border border-white/10 p-10 flex flex-col justify-between"
                  >
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-light leading-snug">Fragmented Data Architecture</p>
                  </motion.div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="h-64 bg-white/5 border border-white/10 p-10 flex flex-col justify-between"
                  >
                    <ShieldCheck className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <p className="text-2xl font-serif mb-2">Vulnerability Gap</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Legacy systems lack modern security protocols.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="aspect-square bg-white text-black p-10 flex flex-col justify-between"
                  >
                    <AlertCircle className="h-10 w-10" />
                    <p className="text-sm font-bold uppercase tracking-wider leading-tight italic">
                      Technical Debt Threshold
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / SERVICES */}
      <section id="solutions" className="py-24 md:py-40 relative">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <motion.div {...fadeInUp} className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.6em] text-muted-foreground mb-4 md:mb-6 block">
                The HYNOX Solution
              </span>
              <h2 className="text-4xl md:text-7xl font-serif leading-[1.1]">
                Modernizing Enterprise <br className="hidden md:block" />
                Legacy Systems
              </h2>
            </motion.div>
            <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed italic">
              "Every system we build is an asset for the next 10 years of scaling, not a temporary patch."
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10"
          >
            {[
              {
                title: "Dedicated IT Support Team",
                icon: ShieldCheck,
                desc: "An elite squad of specialized engineers assigned exclusively to your enterprise infrastructure for 24/7 coverage.",
              },
              {
                title: "System Integration",
                icon: LayoutGrid,
                desc: "We bridge the gap between high-value legacy software and modern API-driven architectures with zero data loss.",
              },
              {
                title: "Cloud Infrastructure",
                icon: Zap,
                desc: "Architecting high-availability environments on AWS/Azure designed for ₹100Cr+ transaction volumes.",
              },
              {
                title: "Proactive 24/7 Monitoring",
                icon: Clock,
                desc: "Real-time NOC monitoring that identifies and resolves bottlenecks before they affect your bottom line.",
              },
              {
                title: "Workflow Automation",
                icon: BarChart3,
                desc: "Custom-built enterprise automation tools that save thousands of man-hours across your global operations.",
              },
              {
                title: "Security & Compliance",
                icon: CheckCircle2,
                desc: "Hardening your infrastructure to meet international security standards and enterprise compliance requirements.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700" />
                <service.icon className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" />
                <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DIFFERENTIATORS */}
      <section id="why-hynox" className="py-24 md:py-40 bg-white/[0.02]">
        <div className="container px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-5 md:sticky md:top-32">
              <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8">
                Why Enterprises <br className="hidden md:block" /> Trust HYNOX
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12">
                In the ₹80L+ project tier, reliability isn't a feature—it's the baseline. We position HYNOX as the
                guardian of your enterprise's digital continuity.
              </p>
              <div className="space-y-12">
                {[
                  { label: "Uptime Commitment", value: "99.99%" },
                  { label: "Response SLA", value: "< 15 Min" },
                  { label: "Legacy Experience", value: "15+ Yrs" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</span>
                    <span className="text-3xl font-serif">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid gap-6">
              {[
                {
                  title: "Large-Scale Expertise",
                  desc: "Proven track record of managing systems for companies with massive operational footprints.",
                },
                {
                  title: "Dedicated Partnership",
                  desc: "We don't operate on a ticket-system. You have a direct line to our lead infrastructure architects.",
                },
                {
                  title: "Future-Proof Architecture",
                  desc: "Every line of code and server configuration is built to handle 10x growth without refactoring.",
                },
                {
                  title: "Security-First Mentality",
                  desc: "Enterprise-grade encryption and zero-trust protocols integrated into every layer of our solutions.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="p-12 border border-white/10 bg-background hover:border-white/30 transition-all group"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight">{card.title}</h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF / CASE STUDIES */}
      <section id="proof" className="py-24 md:py-40 bg-white text-black relative">
        <div className="container px-6 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 block opacity-60">Case Studies</span>
            <h2 className="text-4xl md:text-8xl font-serif leading-[0.9] -ml-1">
              Execution Over <br className="hidden md:block" /> Expectations
            </h2>
          </motion.div>
          <p className="max-w-xs text-sm font-bold uppercase tracking-widest leading-relaxed border-l-4 border-black pl-6">
            Real systems, measurable uptime, and verified enterprise scaling.
          </p>
        </div>

        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 container mx-auto">
          {[
            {
              client: "Global Logistics Hub",
              tag: "System Integration",
              result: "90% Reduction in manual sync errors",
            },
            { client: "Prime FinTech", tag: "Security & Cloud", result: "Zero security breaches in 4 years" },
            { client: "Legacy Manufacturing", tag: "Infrastructure", result: "Saved ₹1.2Cr in annual hardware costs" },
          ].map((caseStudy, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="p-8 md:p-12 border border-black/10 bg-white flex flex-col justify-between aspect-[4/5] sm:aspect-square md:aspect-[4/5] group hover:bg-black hover:text-white transition-all duration-700"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest mb-6 md:mb-8 block opacity-50 group-hover:opacity-80">
                  {caseStudy.tag}
                </span>
                <h3 className="text-4xl font-serif leading-tight group-hover:translate-y-[-10px] transition-transform duration-700">
                  {caseStudy.client}
                </h3>
              </div>
              <div className="border-t border-black/10 pt-10 group-hover:border-white/20">
                <p className="text-2xl font-serif mb-2 tracking-tight">{caseStudy.result}</p>
                <Link
                  href="#"
                  className="text-xs uppercase tracking-widest font-bold group-hover:underline transition-all"
                >
                  View Full Architecture
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CLIENT QUALIFICATION */}
      <section className="py-40 border-y border-white/5">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                Is This Partnership <br /> For Your Business?
              </h2>
              <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                HYNOX provides high-ticket, long-term enterprise solutions. We focus on depth of service over volume of
                clients.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-serif mb-10 tracking-widest uppercase">Ideal Fit</h3>
              <ul className="space-y-6">
                {[
                  "Mid-size or Large Enterprise",
                  "Revenue scaling beyond ₹100Cr",
                  "Need 24/7 dedicated IT system support",
                  "Legacy infrastructure requiring modernization",
                  "Ready to invest in ₹80L+ legacy-grade systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="h-5 w-5 text-white mt-0.5 shrink-0" />
                    <span className="text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-white/5 opacity-40 hover:opacity-60 transition-opacity flex flex-col justify-center"
            >
              <h3 className="text-sm uppercase tracking-[0.4em] mb-8 text-muted-foreground">Not A Fit If...</h3>
              <p className="text-lg font-serif italic leading-relaxed text-muted-foreground mb-8">
                "You are looking for a one-time fix, a small-scale consumer app, or basic web design. We only accept 4
                new enterprise partners per year to maintain our support standards."
              </p>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                — Lead IT Architect, HYNOX
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA / FINAL SECTION */}
      <section id="contact" className="py-40 bg-white text-black relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block opacity-60">
                Consultation Phase
              </span>
              <h2 className="text-5xl md:text-9xl font-serif mb-12 leading-[0.9] tracking-tighter">
                Ready To Build <br />
                Your Legacy?
              </h2>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-16 opacity-90 font-light leading-relaxed">
                Book a confidential enterprise consultation to discuss your infrastructure bottlenecks and scaling
                roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button
                  size="lg"
                  className="h-20 px-14 text-lg bg-black text-white hover:bg-black/90 rounded-none group font-bold tracking-widest uppercase"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest group cursor-pointer border-b border-black/20 pb-2 hover:border-black transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 border-t border-black/5 pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-background relative z-10">
        <div className="container px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <Link href="/" className="flex flex-col mb-8">
                <span className="text-3xl font-serif font-bold tracking-tighter">HYNOX</span>
                <span className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-light">
                  Enterprise IT Solutions
                </span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs font-light leading-relaxed">
                High-ticket IT systems and dedicated support for enterprises scaling globally. Built for reliability,
                security, and the future.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-8 text-white">Solutions</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-8 text-white">Contact</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
                <li>
                  <span className="text-white">India:</span> +91 XXXXX XXXXX
                </li>
                <li>
                  <span className="text-white">Email:</span> legacy@hynox.com
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              © 2025 HYNOX Enterprise IT Solutions Pvt Ltd.
            </p>
            <div className="flex gap-10 text-[10px] uppercase tracking-widest text-muted-foreground">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-10 right-10 z-50 hidden lg:block"
      >
        <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" aria-label="Chat on WhatsApp">
          <Button className="h-16 w-16 rounded-full bg-white text-black hover:bg-white/90 shadow-2xl p-0 flex items-center justify-center transition-all hover:scale-110">
            <MessageSquare className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </main>
  )
}
