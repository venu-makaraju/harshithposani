import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiDownload } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Section } from '../components/Section'

const contactRows = [
  { id: 'email', label: 'Email', value: 'harshith@example.com', href: 'mailto:harshith@example.com', Icon: HiMail },
  { id: 'phone', label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000', Icon: HiPhone },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/harshithposani', href: 'https://linkedin.com/in/harshithposani', Icon: FaLinkedin },
  { id: 'github', label: 'GitHub', value: 'github.com/harshithposani', href: 'https://github.com/harshithposani', Icon: FaGithub },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const row = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's build something together."
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="glass contact-card"
        style={{
          padding: '1.75rem',
          borderRadius: 24,
          maxWidth: 520,
          margin: '0 auto',
        }}
      >
        {contactRows.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            target={item.id === 'email' || item.id === 'phone' ? undefined : '_blank'}
            rel={item.id === 'linkedin' || item.id === 'github' ? 'noopener noreferrer' : undefined}
            variants={row}
            className="contact-input-row"
            whileHover={{ x: 4 }}
            whileFocus={{ x: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.9rem 1rem',
              borderRadius: 14,
              marginBottom: '0.5rem',
              textDecoration: 'none',
              color: 'inherit',
              background: 'var(--card-bg)',
              border: '1px solid var(--bg-glass-border)',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--bg-glass-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'var(--gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <item.Icon size={22} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                {item.value}
              </span>
            </div>
          </motion.a>
        ))}

        <motion.a
          href="/resume.pdf"
          download
          variants={row}
          className="contact-resume-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '0.75rem',
            padding: '0.85rem 1.5rem',
            borderRadius: 14,
            background: 'var(--gradient)',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
          }}
        >
          <HiDownload size={20} />
          Download Resume
        </motion.a>
      </motion.div>

      <style>{`
        .contact-card {
          transition: box-shadow 0.25s;
        }
        .contact-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        [data-theme="light"] .contact-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }
        .contact-input-row:focus {
          outline: none;
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
        }
      `}</style>
    </Section>
  )
}
