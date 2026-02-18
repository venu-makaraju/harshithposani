import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://github.com/harshithposani', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/harshithposani', icon: FaLinkedin, label: 'LinkedIn' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="glass"
      style={{
        marginTop: 'auto',
        padding: '1.5rem clamp(1.5rem, 5vw, 3rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
        borderTop: '1px solid var(--bg-glass-border)',
      }}
    >
      <nav aria-label="Social links" style={{ display: 'flex', gap: '1.25rem' }}>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </nav>
      <p
        style={{
          margin: 0,
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
        }}
      >
        © {year} Harshith Posani. All rights reserved.
      </p>
    </footer>
  )
}
