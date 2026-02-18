import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { ThemeToggle } from './ThemeToggle'
import { SocialLinks } from './SocialLinks'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'amc-pathway', label: 'AMC Pathway' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        className="glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.75rem clamp(1rem, 4vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled ? 'var(--shadow)' : 'none',
          transition: 'box-shadow 0.2s',
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          style={{
            fontWeight: 700,
            fontSize: '1.25rem',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Portfolio
        </a>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
          style={{
            display: 'none',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '0.25rem 0',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div className="desktop-nav" style={{ display: 'none' }}>
            <SocialLinks size={22} style={{ display: 'flex', gap: '1rem' }} />
          </div>
          <ThemeToggle />
          <motion.button
            type="button"
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
            }}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="glass"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(320px, 85vw)',
              zIndex: 999,
              padding: '5rem 1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  color: 'var(--text-primary)',
                  borderRadius: 12,
                }}
              >
                {label}
              </button>
            ))}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <SocialLinks size={28} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
