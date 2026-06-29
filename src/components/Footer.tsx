import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[rgba(0,212,255,0.1)]">
      <div className="w-full section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-['Playfair_Display'] text-2xl font-bold text-white hover:text-[#00d4ff] transition-colors duration-300"
            >
              SPHEREX
            </Link>
            <p className="mt-4 text-sm text-[#64748b] leading-relaxed">
              The digital layer for verified human existence. Built for the sovereign individual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00d4ff] mb-4 font-['Inter'] font-medium">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Principles', path: '/principles' },
                { label: 'Early Access', path: '/join' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-300 font-['Inter']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00d4ff] mb-4 font-['Inter'] font-medium">
              Community
            </h4>
            <ul className="space-y-3">
              {['Governance', 'Documentation', 'Developer API'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-300 font-['Inter'] cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00d4ff] mb-4 font-['Inter'] font-medium">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-300 font-['Inter']"
                >
                  Get in Touch
                </Link>
              </li>
              <li className="text-sm text-[#64748b] font-['Inter']">
                velqx.research.lab@gmail.com
              </li>
              <li className="text-sm text-[#64748b] font-['Inter']">
                San Francisco, California, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(0,212,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b] font-['Inter']">
            &copy; 2026 VELQX Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors duration-300 font-['Inter'] cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors duration-300 font-['Inter'] cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
