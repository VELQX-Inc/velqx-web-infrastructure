import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ScrollReveal from '../components/ScrollReveal'
import { Mail, MapPin, Send, Check } from 'lucide-react'
import gsap from 'gsap'

export default function Contact() {
  useScrollReveal()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.fullName && formData.email && formData.subject && formData.message) {
      setSubmitted(true)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-20">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
      >
        <div className="contact-hero-content relative z-10 text-center section-padding max-w-5xl mx-auto">
          <span className="inline-block text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-['Inter'] mb-4">
            Get in Touch
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            Have questions about SPHEREX? We would love to hear from you. Our
            team is based in San Francisco and responds to every message.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-2xl p-8 md:p-12"
                  >
                    <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-2">
                      Send a Message
                    </h2>
                    <p className="text-[#94a3b8] font-['Inter'] mb-8">
                      Fill out the form below and we will get back to you within
                      24 hours.
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] placeholder:text-[#64748b] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] placeholder:text-[#64748b] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="technical">Technical Support</option>
                          <option value="media">Media & Press</option>
                          <option value="investment">Investment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what is on your mind..."
                          required
                          rows={5}
                          className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] placeholder:text-[#64748b] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.2)] rounded-2xl p-8 md:p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-2">
                      Message Sent
                    </h2>
                    <p className="text-[#94a3b8] font-['Inter']">
                      Thank you for reaching out. We will respond within 24
                      hours.
                    </p>
                  </div>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <ScrollReveal delay={1}>
                  <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:velqx.research.lab@gmail.com"
                          className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-300 font-['Inter']"
                        >
                          velqx.research.lab@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={2}>
                  <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-1">
                          Location
                        </h3>
                        <p className="text-[#94a3b8] font-['Inter']">
                          San Francisco, California, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* SVG Map Visualization */}
                <ScrollReveal delay={3}>
                  <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 relative overflow-hidden">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Grid lines */}
                      <defs>
                        <pattern
                          id="grid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="rgba(0,212,255,0.05)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="400" height="200" fill="url(#grid)" />

                      {/* Radar sweep */}
                      <circle
                        cx="120"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="rgba(0,212,255,0.1)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="120"
                        cy="100"
                        r="40"
                        fill="none"
                        stroke="rgba(0,212,255,0.08)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="120"
                        cy="100"
                        r="20"
                        fill="none"
                        stroke="rgba(0,212,255,0.06)"
                        strokeWidth="0.5"
                      />

                      {/* Crosshair */}
                      <line
                        x1="120"
                        y1="20"
                        x2="120"
                        y2="180"
                        stroke="rgba(0,212,255,0.1)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="20"
                        y1="100"
                        x2="220"
                        y2="100"
                        stroke="rgba(0,212,255,0.1)"
                        strokeWidth="0.5"
                      />

                      {/* Pulsing dot at San Francisco */}
                      <circle cx="120" cy="100" r="4" fill="#00d4ff">
                        <animate
                          attributeName="r"
                          values="4;8;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="120" cy="100" r="4" fill="#00d4ff" />

                      {/* Label */}
                      <text
                        x="135"
                        y="95"
                        fill="#00d4ff"
                        fontSize="10"
                        fontFamily="Inter, sans-serif"
                      >
                        SPHEREX HQ
                      </text>
                      <text
                        x="135"
                        y="108"
                        fill="#64748b"
                        fontSize="8"
                        fontFamily="Inter, sans-serif"
                      >
                        San Francisco, CA
                      </text>

                      {/* Decorative nodes */}
                      <circle cx="280" cy="60" r="2" fill="rgba(0,212,255,0.3)" />
                      <circle cx="320" cy="130" r="2" fill="rgba(0,212,255,0.2)" />
                      <circle cx="250" cy="150" r="2" fill="rgba(0,212,255,0.25)" />
                      <circle cx="350" cy="80" r="2" fill="rgba(0,212,255,0.15)" />

                      {/* Connection lines */}
                      <line
                        x1="120"
                        y1="100"
                        x2="280"
                        y2="60"
                        stroke="rgba(0,212,255,0.08)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="120"
                        y1="100"
                        x2="320"
                        y2="130"
                        stroke="rgba(0,212,255,0.06)"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
