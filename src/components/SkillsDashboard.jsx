import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '../data/skillsData'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const categoryCard = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function SkillsDashboard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
    >
      {SKILL_CATEGORIES.map((category) => (
        <motion.section
          key={category.id}
          variants={categoryCard}
          className="skills-category glass"
          style={{
            padding: '1.5rem 1.75rem',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <CategoryCircle
              categoryId={category.id}
              level={Math.round(
                category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length
              )}
            />
            <h3
              className="skills-category-title"
              style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                margin: 0,
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {category.title}
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {category.skills.map((skill) => (
              <ProgressBarRow key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.section>
      ))}

      <style>{`
        .skills-category:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        [data-theme="light"] .skills-category:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </motion.div>
  )
}

function CategoryCircle({ categoryId, level }) {
  const size = 56
  const stroke = 5
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (level / 100) * circumference
  const gradientId = `skillGrad-${categoryId}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ flexShrink: 0, position: 'relative', width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--bg-secondary)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
      </svg>
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '0.7rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          pointerEvents: 'none',
        }}
      >
        {level}%
      </span>
    </motion.div>
  )
}

function ProgressBarRow({ skill }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      style={{ position: 'relative' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {skill.name}
        </span>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)' }}>
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: 10,
          borderRadius: 5,
          background: 'var(--bg-secondary)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            borderRadius: 5,
            background: 'var(--gradient)',
            width: `${skill.level}%`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
      {showTooltip && (
        <motion.div
          className="skill-tooltip glass"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            left: 0,
            bottom: '100%',
            marginBottom: 6,
            padding: '0.5rem 0.75rem',
            borderRadius: 10,
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            maxWidth: 280,
            zIndex: 10,
            boxShadow: 'var(--shadow)',
          }}
        >
          {skill.tooltip}
        </motion.div>
      )}
    </motion.div>
  )
}
