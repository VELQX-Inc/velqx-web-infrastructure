import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Principles', path: '/principles' },
    { label: 'Early Access', path: '/join' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="w-full section-padding flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-['Playfair_Display'] text-xl md:text-2xl font-bold tracking-tight text-white hover:text-[#00d4ff] transition-colors duration-300"
        >
          SPHEREX
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.15em] font-['Inter'] transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? 'text-[#00d4ff]'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#00d4ff] transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/join"
            className="btn-primary text-xs py-2.5 px-5"
          >
            Join Early Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)] transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-padding py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-[0.15em] font-['Inter'] py-2 transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-[#00d4ff]'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/join" className="btn-primary text-xs py-3 text-center mt-2">
            Join Early Access
          </Link>
        </div>
      </div>
    </nav>
  )
}
