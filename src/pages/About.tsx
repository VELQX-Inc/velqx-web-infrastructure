import { Link } from 'react-router'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ScrollReveal from '../components/ScrollReveal'
import { User, Briefcase, Building2, Heart, X, HelpCircle, Lock, Crown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function About() {
  useScrollReveal()
  const [activeTab, setActiveTab] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const whatIsNot = [
    {
      icon: X,
      title: 'Not a Game',
      desc: 'SPHEREX is not entertainment. It is infrastructure for human existence online.',
    },
    {
      icon: HelpCircle,
      title: 'Not Anonymous',
      desc: 'Pseudonymity with cryptographic proof. You are known without being exposed.',
    },
    {
      icon: Lock,
      title: 'Not a Walled Garden',
      desc: 'Open protocol, permissionless. No single company controls your presence.',
    },
    {
      icon: Crown,
      title: 'Not an Extractive Platform',
      desc: 'Value flows to creators and participants, not platform owners.',
    },
  ]

  const whoBenefits = [
    {
      icon: User,
      title: 'Individual',
      desc: 'Own your digital identity across all platforms. One verified presence, infinite applications.',
    },
    {
      icon: Briefcase,
      title: 'Professional',
      desc: 'Build a portable reputation that follows your career, not your employer.',
    },
    {
      icon: Building2,
      title: 'Organization',
      desc: 'Verify stakeholders, govern communities, and build trust at scale.',
    },
    {
      icon: Heart,
      title: 'Human',
      desc: 'Be seen as a person, not a data point. Restore dignity to digital existence.',
    },
  ]

  return (
    <div className="pt-20">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="about-hero-content relative z-10 text-center section-padding max-w-5xl mx-auto">
          <span className="inline-block text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-['Inter'] mb-4">
            About SPHEREX
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            What is <span className="gradient-text">SPHEREX</span>?
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto font-['Inter'] leading-relaxed">
            SPHEREX is the digital layer for verified human existence. A protocol
            that restores sovereignty to the individual in the digital realm.
          </p>
        </div>
      </section>

      {/* WHAT IS SPHEREX */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-6">
                  The Protocol for{' '}
                  <span className="text-[#00d4ff]">Verified Existence</span>
                </h2>
                <div className="space-y-4 text-[#94a3b8] font-['Inter'] leading-relaxed">
                  <p>
                    SPHEREX is a decentralized protocol that enables verified human
                    identity, sovereign data ownership, and authentic digital
                    presence. It is not a social network. It is not a blockchain.
                    It is the missing layer between you and the internet.
                  </p>
                  <p>
                    Through cryptographic proof of personhood, biometric
                    verification, and zero-knowledge attestations, SPHEREX creates
                    a portable identity that you control completely.
                  </p>
                  <p>
                    Every interaction, every credential, every relationship you
                    build on SPHEREX belongs to you. Not to a platform. Not to an
                    algorithm. To you.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="relative">
                <img
                  src="/images/spherex-hero.png"
                  alt="SPHEREX Network"
                  className="w-full max-w-md mx-auto opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT SPHEREX IS NOT */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white text-center mb-4">
              What SPHEREX <span className="text-[#94a3b8]">Is Not</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-16 font-['Inter']">
              Clarity through negation. Understanding what we are not helps define
              what we are.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIsNot.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="card-hover bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 h-full">
                  <item.icon className="w-8 h-8 text-[#00d4ff] mb-4" />
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-['Inter'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEFINING DISTINCTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-px bg-[rgba(0,212,255,0.3)] mx-auto mb-8" />
            <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
              The defining question of our era is not{' '}
              <span className="text-[#94a3b8]">
                "How do we connect more people?"
              </span>
              <br />
              It is{' '}
              <span className="text-[#00d4ff]">
                "How do we restore dignity to those already connected?"
              </span>
            </blockquote>
            <div className="w-16 h-px bg-[rgba(0,212,255,0.3)] mx-auto" />
          </div>
        </ScrollReveal>
      </section>

      {/* THE PROBLEM */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white text-center mb-16">
              The Problem
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                letter: 'A',
                title: 'Identity Fragmentation',
                desc: 'Your identity is scattered across hundreds of platforms. Each owns a fragment. None sees the whole.',
                img: '/images/problem-fragmentation.jpg',
              },
              {
                letter: 'B',
                title: 'Surveillance Capitalism',
                desc: 'Your attention, behavior, and data are harvested, analyzed, and sold without meaningful consent.',
                img: '/images/problem-surveillance.jpg',
              },
              {
                letter: 'C',
                title: 'Economic Extraction',
                desc: 'Creators generate value. Platforms capture it. The current model enriches intermediaries, not originators.',
                img: '/images/problem-extraction.jpg',
              },
              {
                letter: 'D',
                title: 'Digital Isolation',
                desc: 'Despite infinite connectivity, authentic human presence has been replaced by performative engagement metrics.',
                img: '/images/problem-isolation.jpg',
              },
            ].map((p, i) => (
              <ScrollReveal key={p.letter} delay={i + 1}>
                <div className="card-hover group bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] to-transparent" />
                    <span className="absolute top-4 left-4 font-['Playfair_Display'] text-6xl font-bold text-[rgba(0,212,255,0.2)]">
                      {p.letter}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="w-8 h-px bg-[#00d4ff] mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] font-['Inter'] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Who Benefits
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-16 font-['Inter']">
              SPHEREX serves every stakeholder in the digital ecosystem.
            </p>
          </ScrollReveal>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {whoBenefits.map((b, i) => (
              <button
                key={b.title}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-['Inter'] transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]'
                    : 'text-[#94a3b8] border border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.25)] hover:text-white'
                }`}
              >
                <b.icon className="w-4 h-4" />
                {b.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div ref={contentRef} className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              {(() => {
                const Icon = whoBenefits[activeTab].icon
                return (
                  <>
                    <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(0,212,255,0.1)] flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-white mb-4">
                        {whoBenefits[activeTab].title}
                      </h3>
                      <p className="text-[#94a3b8] font-['Inter'] leading-relaxed text-lg">
                        {whoBenefits[activeTab].desc}
                      </p>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ROOT CAUSE */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-6">
              The Root Cause
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-[#94a3b8] font-['Inter'] leading-relaxed mb-8 max-w-2xl mx-auto">
              The internet was built without an identity layer. We bolted on
              authentication after the fact, creating a world where bots are
              indistinguishable from humans, where trust is manufactured by
              intermediaries, and where the individual has no seat at the table.
              SPHEREX fixes this at the protocol level.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/join" className="btn-primary inline-block">
              Join the Protocol
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
