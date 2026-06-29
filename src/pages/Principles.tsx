import { useScrollReveal } from '../hooks/useScrollReveal'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Principles() {
  useScrollReveal()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.principles-hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const principles = [
    {
      num: '01',
      title: 'Verified Identity',
      desc: 'Every participant proves their humanity through cryptographic attestation. Not a government ID. Not a phone number. A mathematical proof that you are a unique, living person.',
      detail: 'Sybil resistance through biometric hashing and zero-knowledge proofs.',
    },
    {
      num: '02',
      title: 'Data Sovereignty',
      desc: 'Your data is yours. You decide what to share, with whom, and for how long. No platform can sell what they do not possess.',
      detail: 'Encrypted personal data stores with user-controlled access grants.',
    },
    {
      num: '03',
      title: 'Value Reciprocity',
      desc: 'When value is created, it flows to the creator first. The protocol ensures that intermediaries cannot capture disproportionate value from user-generated content and activity.',
      detail: 'Automatic revenue sharing through smart contract-based distribution.',
    },
    {
      num: '04',
      title: 'Presence Over Performance',
      desc: 'Authentic human connection is prioritized over engagement metrics. The protocol does not optimize for time-on-site or click-through rates.',
      detail: 'No algorithmic feed manipulation. No infinite scroll. No dark patterns.',
    },
    {
      num: '05',
      title: 'Interoperable Existence',
      desc: 'Your SPHEREX identity works everywhere. One verified presence that travels with you across platforms, services, and digital environments.',
      detail: 'Cross-platform identity standard with portable reputation and credentials.',
    },
    {
      num: '06',
      title: 'Governance Rights',
      desc: 'Users of the protocol are stakeholders in the protocol. Decisions about the network are made by those who use it, not distant shareholders.',
      detail: 'One person, one vote. Reputation-weighted participation in protocol governance.',
    },
    {
      num: '07',
      title: 'Privacy Default',
      desc: 'Everything is private unless you explicitly choose to share it. Privacy is not a premium feature. It is the foundation.',
      detail: 'End-to-end encryption. Zero-knowledge proofs for selective disclosure.',
    },
    {
      num: '08',
      title: 'Open Infrastructure',
      desc: 'The protocol is open source, permissionless, and transparent. Anyone can build on it. No one can control it.',
      detail: 'MIT-licensed codebase. Open specifications. Permissionless node operation.',
    },
    {
      num: '09',
      title: 'Sustainable Economics',
      desc: 'The protocol is designed for century-scale operation. Economic incentives align long-term sustainability over short-term extraction.',
      detail: 'Deflationary token mechanics with treasury-based public goods funding.',
    },
    {
      num: '10',
      title: 'Human Dignity',
      desc: 'Technology should elevate the human condition. SPHEREX exists to serve people, not the other way around.',
      detail: 'Ethical design principles. Accessibility requirements. Human-centered development.',
    },
  ]

  return (
    <div className="pt-20">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="principles-hero-content relative z-10 text-center section-padding max-w-5xl mx-auto">
          <span className="inline-block text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-['Inter'] mb-4">
            The Foundation
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ten <span className="gradient-text">Principles</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto font-['Inter'] leading-relaxed">
            These ten principles govern every decision in the SPHEREX protocol.
            They are immutable, non-negotiable, and collectively enforced.
          </p>
        </div>
      </section>

      {/* PRINCIPLES GRID */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <ScrollReveal key={p.num} delay={(i % 2) + 1}>
                <div className="group bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-xl p-8 relative overflow-hidden hover:border-[rgba(0,212,255,0.25)] transition-all duration-500">
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00d4ff] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                  <div className="flex items-start gap-6">
                    <span className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[rgba(0,212,255,0.2)] group-hover:text-[rgba(0,212,255,0.4)] transition-colors duration-500 flex-shrink-0">
                      {p.num}
                    </span>
                    <div className="transform group-hover:translate-x-2 transition-transform duration-500">
                      <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#94a3b8] font-['Inter'] leading-relaxed mb-3">
                        {p.desc}
                      </p>
                      <p className="text-xs text-[#00d4ff] font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 md:py-32 section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#0f1729] border border-[rgba(0,212,255,0.1)] rounded-2xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.05)] via-transparent to-transparent" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00d4ff] rounded-full blur-[120px] opacity-10" />

              <div className="relative z-10">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build on These Principles?
                </h2>
                <p className="text-[#94a3b8] max-w-xl mx-auto mb-8 font-['Inter']">
                  Join the early access program and be among the first to
                  experience a protocol built on human dignity.
                </p>
                <Link
                  to="/join"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Join Early Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
