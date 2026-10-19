import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Star,
  Activity,
  Check
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      title: "Custom Web Applications",
      desc: "Blazing-fast, responsive web systems built with React, Next.js, and modern cloud APIs tailored to your business needs.",
      tag: "Web Platforms",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Mobile App Development",
      desc: "Intuitive, top-performing cross-platform iOS and Android apps engineered for fluid user journeys and high retention.",
      tag: "iOS & Android",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      icon: <Cloud className="w-6 h-6 text-sky-600" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Resilient serverless architecture, automated CI/CD pipelines, and cost-efficient hosting on AWS, GCP, and Azure.",
      tag: "Cloud & DevOps",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "AI & Smart Automation",
      desc: "Supercharge efficiency with predictive intelligence, custom LLM solutions, and automated enterprise workflows.",
      tag: "AI Systems",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Cybersecurity & Compliance",
      desc: "Comprehensive security audits, secure authentications, and enterprise vulnerability defense systems.",
      tag: "Security First",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      icon: <Zap className="w-6 h-6 text-violet-600" />,
      title: "Digital Transformation",
      desc: "Modernize legacy systems into agile, scalable, and high-converting modern software ecosystems.",
      tag: "Scale & Growth",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
    }
  ];

  const stats = [
    { value: "150+", label: "Completed Projects", icon: <CheckCircle2 className="w-5 h-5 text-indigo-600" /> },
    { value: "99.8%", label: "Client Satisfaction", icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" /> },
    { value: "8+ Yrs", label: "Industry Experience", icon: <Award className="w-5 h-5 text-blue-600" /> },
    { value: "24/7", label: "Real-time Support", icon: <Globe2 className="w-5 h-5 text-emerald-600" /> }
  ];

  const keyBenefits = [
    {
      title: "Engineered for Velocity",
      desc: "Optimized architectures delivering sub-second load times and superior engagement rates."
    },
    {
      title: "Enterprise Grade Security",
      desc: "State-of-the-art encryption protocols, role-based controls, and security best practices."
    },
    {
      title: "Scale Without Bottlenecks",
      desc: "Cloud-native foundations built to gracefully handle millions of requests without downtime."
    },
    {
      title: "Dedicated Technical Support",
      desc: "Round-the-clock monitoring and continuous upgrades to keep you ahead of the market."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-indigo-600 selection:text-white font-sans">
      {/* Decorative Light Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-blue-200/40 rounded-full blur-[160px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-purple-200/30 rounded-full blur-[140px]"></div>
      </div>

      {/* Top Banner */}
      <div className="relative z-50 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 border-b border-indigo-100 text-xs py-2 px-4 text-center text-indigo-900 font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
        <span>✨ Delivering next-generation web platforms & enterprise digital solutions.</span>
        <a href="#contact" className="underline hover:text-indigo-700 font-bold ml-1 transition-colors">
          Book a Free Consultation →
        </a>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="CrystalInfoHub Logo"
                className="w-16 h-16 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                  Crystal<span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">InfoHub</span>
                </span>
                <span className="text-[10px] tracking-widest text-indigo-600 font-bold uppercase -mt-0.5">
                  Tech & Digital Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#advantages" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Why Us</a>
              <a href="#process" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Process</a>
              <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:scale-105 active:scale-95"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-indigo-600"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-[999] bg-white flex flex-col md:hidden overflow-y-auto">
            {/* Top Bar inside Fullscreen Menu */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-20 border-b border-slate-200">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src="/logo.png"
                  alt="CrystalInfoHub Logo"
                  className="w-11 h-11 object-contain rounded-xl shadow-xs"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                    Crystal<span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">InfoHub</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-indigo-600 font-bold uppercase -mt-0.5">
                    Tech & Digital Solutions
                  </span>
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="flex-1 flex flex-col justify-between px-6 py-8">
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Why Us", href: "#advantages" },
                  { name: "Process", href: "#process" },
                  { name: "Contact", href: "#contact" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 px-4 rounded-2xl hover:bg-slate-100 text-slate-800 hover:text-indigo-600 transition-all group"
                  >
                    <div>
                      <div className="text-xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>

              {/* Bottom CTA & Info */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="text-center text-xs text-slate-400">
                  contact@crystalinfohub.com • +91 96016 48056
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-20 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-200 bg-white shadow-xs text-indigo-700 text-xs sm:text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping"></span>
              <span>Next-Gen Software & Digital Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                High-Impact Digital Products
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              At <strong className="text-slate-900 font-semibold">CrystalInfoHub</strong>, we build modern web applications, high-performance mobile apps, and scalable cloud solutions to accelerate your growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 text-base"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all hover:scale-105 active:scale-95 text-base"
              >
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Schedule Consultation
              </a>
            </div>

            {/* Metrics Cards */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    {stat.icon}
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-indigo-600 font-extrabold mb-3">Our Core Offerings</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Capabilities Built for Modern Demands
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From conception to deployment, we deliver battle-tested software solutions built for speed, aesthetics, and rock-solid stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value Proposition */}
      <section id="advantages" className="py-24 bg-slate-50/70 relative z-10 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-4">
                <TrendingUp className="w-4 h-4" /> Why Choose CrystalInfoHub
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Engineered for Reliability, Designed for Growth
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                We combine deep engineering experience with clean product design to create software that accelerates customer acquisition and automates operational complexity.
              </p>

              <div className="space-y-4">
                {keyBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Architecture Preview Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 to-blue-300 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">crystalinfohub.com/stack</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <Layers className="w-6 h-6 text-indigo-600" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Modern Full-Stack Ecosystem</div>
                        <div className="text-xs text-slate-500">React, TypeScript, Node.js & Cloud</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Verified
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <Zap className="w-6 h-6 text-amber-500" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Speed & Performance</div>
                        <div className="text-xs text-slate-500">Google Lighthouse Score 99/100</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                      Ultra-Fast
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">End-to-End Encryption</div>
                        <div className="text-xs text-slate-500">SSL, OAuth 2.0 & Token Auth</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Secured
                    </span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600" /> System Uptime: 99.99%
                  </span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="py-24 bg-white border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-indigo-600 font-extrabold mb-3">Workflow</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our 4-Step Delivery Process
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              A transparent, agile roadmap ensuring on-time delivery with uncompromising standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Blueprint", desc: "We evaluate your objectives, user journeys, and technical prerequisites into an actionable plan." },
              { step: "02", title: "Architecture & UI/UX", desc: "Crafting intuitive user interfaces and a resilient backend architecture designed to scale seamlessly." },
              { step: "03", title: "Agile Development", desc: "Iterative sprints with regular progress demonstrations and continuous automated test verification." },
              { step: "04", title: "Deployment & Support", desc: "Production launch on scalable cloud infrastructure backed by continuous monitoring and improvements." }
            ].map((p, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <span className="text-4xl font-black text-indigo-200 font-mono block mb-4">{p.step}</span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-600 font-extrabold mb-3">Get In Touch</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
                Let's Build Something Exceptional Together
              </h3>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed">
                Have an idea, project, or need technical consulting? Get in touch today, and our solution architects will contact you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Email</div>
                    <div className="text-slate-900 font-semibold">contact@crystalinfohub.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Phone Support</div>
                    <div className="text-slate-900 font-semibold">+91 96016 48056</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Location</div>
                    <div className="text-slate-900 font-semibold">Surat, Gujarat, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl shadow-slate-200/50">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you, <span className="text-indigo-600 font-semibold">{formData.name || 'there'}</span>. Our engineering team will review your inquiry and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, goals, or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 relative z-10 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="CrystalInfoHub Logo"
                className="w-8 h-8 object-contain rounded-lg shadow-xs"
              />
              <span className="font-extrabold text-slate-900 text-lg">CrystalInfoHub</span>
            </div>
            <div className="flex items-center flex-wrap gap-8 text-sm">
              <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
              <a href="#advantages" className="hover:text-indigo-600 transition-colors">Why Us</a>
              <a href="#process" className="hover:text-indigo-600 transition-colors">Process</a>
              <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} CrystalInfoHub. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
