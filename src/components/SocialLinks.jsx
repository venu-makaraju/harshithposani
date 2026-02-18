import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = [
  { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
]

export function SocialLinks({ size = 24, className = '' }) {
  return (
    <nav className={className} aria-label="Social links">
      {links.map(({ href, icon: Icon, label }, i) => (
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
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          <Icon size={size} />
        </motion.a>
      ))}
    </nav>
  )
}
