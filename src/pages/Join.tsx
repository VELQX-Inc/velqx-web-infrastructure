import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ScrollReveal from '../components/ScrollReveal'
import { Shield, Briefcase, ShoppingBag, Check, Copy } from 'lucide-react'
import gsap from 'gsap'

export default function Join() {
  useScrollReveal()
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const ticketId = `SPX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.join-hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && interest) {
      setSubmitted(true)
    }
  }

  const copyTicket = () => {
    navigator.clipboard.writeText(ticketId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const features = [
    {
      icon: Shield,
      title: 'Verified Identity',
      desc: 'Cryptographic proof of personhood. One human, one account, forever.',
    },
    {
      icon: Briefcase,
      title: 'Real Work',
      desc: 'Your skills, reputation, and contributions follow you across the network.',
    },
    {
      icon: ShoppingBag,
      title: 'Immersive Commerce',
      desc: 'Buy, sell, and transact with verified counterparties in a trust-native environment.',
    },
  ]

  return (
    <div className="pt-20">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
      >
        <div className="join-hero-content relative z-10 text-center section-padding max-w-5xl mx-auto">
          <span className="inline-block text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-['Inter'] mb-4">
            Limited Access
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Join <span className="gradient-text">Early Access</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            Be among the first to claim your verified identity on the protocol
            that will redefine human presence online.
          </p>
        </div>
      </section>

      {/* FORM + FEATURES */}
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
                      Reserve Your Spot
                    </h2>
                    <p className="text-[#94a3b8] font-['Inter'] mb-8">
                      Early access members receive priority identity verification
                      and governance rights.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] placeholder:text-[#64748b] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-['Inter'] mb-2">
                          I am interested as...
                        </label>
                        <select
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          required
                          className="w-full bg-[#0a0a0f] border border-[rgba(0,212,255,0.1)] rounded-xl px-5 py-4 text-white font-['Inter'] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select your role
                          </option>
                          <option value="individual">An Individual</option>
                          <option value="professional">A Professional</option>
                          <option value="organization">An Organization</option>
                          <option value="developer">A Developer</option>
                          <option value="investor">An Investor</option>
                        </select>
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Submit Application
                      </button>
                    </div>

                    <p className="text-xs text-[#64748b] font-['Inter'] mt-6 text-center">
                      By submitting, you agree to receive updates about SPHEREX.
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.2)] rounded-2xl p-8 md:p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-2">
                      Welcome to the Future
                    </h2>
                    <p className="text-[#94a3b8] font-['Inter'] mb-8">
                      Your early access application has been received. Your
                      ticket:
                    </p>

                    <div className="bg-[#0a0a0f] border border-[rgba(0,212,255,0.15)] rounded-xl p-6 mb-8 inline-flex items-center gap-4 cursor-pointer hover:border-[rgba(0,212,255,0.3)] transition-colors duration-300"
                      onClick={copyTicket}
                    >
                      <span className="font-['Inter'] text-lg font-semibold text-[#00d4ff] tracking-wider">
                        {ticketId}
                      </span>
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-[#64748b]" />
                      )}
                    </div>

                    <p className="text-xs text-[#64748b] font-['Inter']">
                      {copied
                        ? 'Copied to clipboard!'
                        : 'Click to copy your ticket ID'}
                    </p>
                  </div>
                )}
              </ScrollReveal>
            </div>

            {/* Features */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {features.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i + 1}>
                    <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 group hover:border-[rgba(0,212,255,0.25)] transition-all duration-500">
                      <f.icon className="w-8 h-8 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-[#94a3b8] font-['Inter'] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
