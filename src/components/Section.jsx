import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      {(title || subtitle) && (
        <motion.header variants={fadeIn} className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.header>
      )}
      {children}
    </motion.section>
  )
}
