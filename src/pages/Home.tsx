import { Link } from 'react-router'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollReveal from '../components/ScrollReveal'
import { ChevronDown, Globe, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Home() {
  useScrollReveal()
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    {
      letter: 'A',
      title: 'Identity Fragmentation',
      description:
        'Your identity is scattered across hundreds of platforms, each owning a fragment of who you are.',
      image: '/images/problem-fragmentation.jpg',
    },
    {
      letter: 'B',
      title: 'Surveillance Capitalism',
      description:
        'Your attention, data, and behavior are harvested and sold without your meaningful consent.',
      image: '/images/problem-surveillance.jpg',
    },
    {
      letter: 'C',
      title: 'Value Extraction',
      description:
        'The platforms you built extract wealth from your creativity while giving crumbs in return.',
      image: '/images/problem-extraction.jpg',
    },
    {
      letter: 'D',
      title: 'Digital Isolation',
      description:
        'Despite being "connected," genuine human presence has been replaced by performative engagement.',
      image: '/images/problem-isolation.jpg',
    },
  ]

  const principles = [
    { num: '01', title: 'Verified Identity', desc: 'Cryptographic proof of personhood' },
    { num: '02', title: 'Data Sovereignty', desc: 'You own your data, period' },
    { num: '03', title: 'Value Reciprocity', desc: 'Creators earn what they deserve' },
    { num: '04', title: 'Presence Over Performance', desc: 'Authentic connection, not metrics' },
    { num: '05', title: 'Interoperable Existence', desc: 'One identity, everywhere' },
    { num: '06', title: 'Governance Rights', desc: 'Users shape the protocol' },
    { num: '07', title: 'Privacy Default', desc: 'Private by design, always' },
    { num: '08', title: 'Open Infrastructure', desc: 'Permissionless and transparent' },
    { num: '09', title: 'Sustainable Economics', desc: 'Built for long-term value' },
    { num: '10', title: 'Human Dignity', desc: 'Technology serves people' },
  ]

  const stats = [
    { value: 6.12, suffix: 'B', prefix: '', decimals: 2, label: 'Potential Users' },
    { value: 186, suffix: 'M', prefix: '', decimals: 0, label: 'Daily Active' },
    { value: 47, suffix: '%', prefix: '', decimals: 0, label: 'Identity Verified' },
    { value: 2.4, suffix: 'B', prefix: '$', decimals: 1, label: 'Value Transacted' },
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 text-center section-padding max-w-6xl mx-auto">
          {/* Badge */}
          <div ref={badgeRef} className="mb-8 opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-['Inter']">
              <img
                src="/images/velqx-logo.png"
                alt="VELQX"
                className="h-4 w-auto"
              />
              Developed by VELQX Inc.
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="font-['Playfair_Display'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] mb-6 opacity-0"
          >
            <span className="gradient-text">SPHEREX</span>
          </h1>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 font-['Inter'] leading-relaxed opacity-0"
          >
            The Digital Layer for Verified Human Existence.
            <br />
            <span className="text-[#00d4ff]">Put a face to the internet.</span>
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <Link to="/join" className="btn-primary">
              Join Early Access
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[#64748b] uppercase tracking-[0.2em] font-['Inter']">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-[#00d4ff]" />
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
              Four Structural Failures
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-16 font-['Inter']">
              The internet was built for connection. It has become a machine for extraction.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <ScrollReveal key={p.letter} delay={i + 1}>
                <div className="card-hover group relative bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] to-transparent" />
                    <span className="absolute top-4 left-4 font-['Playfair_Display'] text-6xl font-bold text-[rgba(0,212,255,0.2)] group-hover:text-[rgba(0,212,255,0.4)] transition-colors duration-500">
                      {p.letter}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="w-8 h-px bg-[#00d4ff] mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] font-['Inter'] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE QUOTE */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
              "Every platform asks{' '}
              <span className="text-[#94a3b8]">what you can do for them.</span>
              <br />
              <span className="text-[#00d4ff]">SPHEREX asks what technology can do for you.</span>"
            </blockquote>
            <div className="w-16 h-px bg-[rgba(0,212,255,0.3)] mx-auto" />
          </div>
        </ScrollReveal>
      </section>

      {/* PRINCIPLES BENTO GRID */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
              Ten Structural Principles
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-16 font-['Inter']">
              The protocol is governed by principles, not platforms.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <ScrollReveal key={p.num} delay={(i % 4) + 1}>
                <Link
                  to="/principles"
                  className={`bento-hover group block bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 relative overflow-hidden ${
                    i === 9 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1' : ''
                  }`}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00d4ff] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <span className="text-[#00d4ff] text-xs font-['Inter'] tracking-[0.1em] mb-3 block">
                    {p.num}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-['Inter']">{p.desc}</p>
                </Link>
              </ScrollReveal>
            ))}

            {/* CTA Card */}
            <ScrollReveal delay={2}>
              <Link
                to="/principles"
                className="bento-hover group flex items-center justify-center bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 relative overflow-hidden min-h-[160px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center relative z-10">
                  <span className="text-[#00d4ff] text-sm font-['Inter'] tracking-[0.1em] uppercase group-hover:tracking-[0.2em] transition-all duration-300">
                    View All Principles
                  </span>
                  <div className="w-8 h-px bg-[#00d4ff] mx-auto mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i + 1}>
                <div className="text-center group">
                  <div className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                    <AnimatedCounter
                      target={s.value}
                      suffix={s.suffix}
                      prefix={s.prefix}
                      decimals={s.decimals}
                      duration={2500}
                    />
                  </div>
                  <p className="text-sm text-[#94a3b8] uppercase tracking-[0.1em] font-['Inter']">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted Infrastructure
            </h2>
            <p className="text-[#94a3b8] mb-12 font-['Inter']">
              Built on the world's most reliable technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              <div className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors duration-300 cursor-pointer group">
                <Globe className="w-8 h-8 group-hover:text-[#00d4ff] transition-colors duration-300" />
                <span className="text-xl font-['Inter'] font-semibold tracking-tight">
                  Microsoft
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors duration-300 cursor-pointer group">
                <Zap className="w-8 h-8 group-hover:text-[#00d4ff] transition-colors duration-300" />
                <span className="text-xl font-['Inter'] font-semibold tracking-tight">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-2xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.05)] via-transparent to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00d4ff] rounded-full blur-[120px] opacity-10" />

              <div className="relative z-10">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Be Part of the Future
                </h2>
                <p className="text-[#94a3b8] max-w-xl mx-auto mb-8 font-['Inter']">
                  Join the early access program and help shape the protocol for
                  verified human existence on the internet.
                </p>
                <Link to="/join" className="btn-primary inline-block">
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
