import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBriefcase, HiChevronDown, HiLocationMarker } from 'react-icons/hi'

const experience = {
  company: 'CLEVERSMITHS INC',
  role: 'AI Data Engineer',
  location: 'USA',
  duration: 'Oct 2024 – Present',
  techStack: ['Python', 'PyTorch', 'TensorFlow', 'SQL', 'AWS', 'Spark', 'MLflow', 'Docker'],
  highlights: [
    {
      title: 'ML pipelines & data infrastructure',
      summary: 'Designed and maintained end-to-end ML pipelines for production models.',
      details: 'Built automated data ingestion, feature stores, training jobs, and model deployment workflows. Integrated with existing data lakes and warehouse systems.',
    },
    {
      title: 'Feature engineering at scale',
      summary: 'Developed reusable feature transformations and validation for large datasets.',
      details: 'Created feature engineering frameworks used across multiple projects. Implemented data quality checks and monitoring for training and inference.',
    },
    {
      title: 'Model optimization & MLOps',
      summary: 'Improved model performance and established MLOps practices.',
      details: 'Tuned hyperparameters, reduced latency, and set up experiment tracking and model registry. Collaborated with DevOps for CI/CD and monitoring.',
    },
  ],
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function ExperienceTimeline() {
  return (
    <motion.div
      className="experience-timeline"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={{ position: 'relative', maxWidth: 640 }}
    >
      {/* Vertical line */}
      <div
        className="timeline-line"
        style={{
          position: 'absolute',
          left: 23,
          top: 48,
          bottom: 24,
          width: 2,
          background: 'linear-gradient(180deg, var(--accent), var(--accent-secondary))',
          borderRadius: 2,
        }}
      />

      {/* Timeline node */}
      <motion.div
        variants={item}
        className="timeline-node"
        style={{
          position: 'absolute',
          left: 12,
          top: 40,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'var(--gradient)',
          border: '3px solid var(--bg-primary)',
          boxShadow: '0 0 0 2px var(--accent)',
          zIndex: 2,
        }}
      />

      {/* Card content */}
      <motion.article
        variants={item}
        className="glass timeline-card"
        style={{
          marginLeft: 56,
          padding: '1.75rem',
          borderRadius: 20,
          marginBottom: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: 'var(--gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0,
            }}
          >
            <HiBriefcase size={26} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              {experience.role}
            </h3>
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
              {experience.company}
            </p>
            <p
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '0.75rem',
              }}
            >
              <HiLocationMarker size={16} />
              {experience.location} · {experience.duration}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {experience.techStack.map((tag) => (
                <span
                  key={tag}
                  className="timeline-tag"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.3rem 0.65rem',
                    borderRadius: 8,
                    background: 'var(--card-bg)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--bg-glass-border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable highlights */}
        <ul style={{ listStyle: 'none', marginTop: '1.25rem', padding: 0 }}>
          {experience.highlights.map((h, i) => (
            <ExpandableHighlight key={i} highlight={h} index={i} />
          ))}
        </ul>
      </motion.article>

      <style>{`
        .timeline-card {
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .timeline-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        [data-theme="light"] .timeline-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </motion.div>
  )
}

function ExpandableHighlight({ highlight, index }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.li
      layout
      className="timeline-highlight"
      initial={false}
      style={{
        marginBottom: '0.5rem',
        borderRadius: 12,
        background: expanded ? 'var(--card-bg)' : 'transparent',
        border: '1px solid transparent',
        overflow: 'hidden',
      }}
    >
      <motion.button
        type="button"
        layout
        onClick={() => setExpanded((e) => !e)}
        style={{
          width: '100%',
          padding: '0.85rem 1rem',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          color: 'var(--text-primary)',
          fontWeight: 600,
          fontSize: '0.95rem',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          borderRadius: 12,
        }}
        whileHover={{ backgroundColor: 'var(--card-bg)' }}
      >
        <span style={{ flex: 1 }}>{highlight.title}</span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: 'var(--accent)', flexShrink: 0 }}
        >
          <HiChevronDown size={20} />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 1rem 1rem 1rem',
                paddingTop: 0,
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.65,
              }}
            >
              <p style={{ marginBottom: '0.5rem' }}>{highlight.summary}</p>
              <p style={{ margin: 0 }}>{highlight.details}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}
