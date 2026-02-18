import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiInformationCircle } from 'react-icons/hi'
import { AMC_ROADMAP_STEPS } from '../data/amcPathwayData'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const stepItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
}

export function AMCRoadmap() {
  return (
    <div className="amc-roadmap">
      <motion.div
        className="amc-roadmap-track"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative', maxWidth: 620, margin: '0 auto' }}
      >
        {/* Animated vertical connector line */}
        <motion.div
          className="amc-roadmap-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: 28,
            top: 32,
            bottom: 32,
            width: 3,
            background: 'var(--amc-connector)',
            borderRadius: 2,
            transformOrigin: 'top',
          }}
        />

        {AMC_ROADMAP_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            variants={stepItem}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: index < AMC_ROADMAP_STEPS.length - 1 ? '0.5rem' : 0,
              paddingLeft: 0,
            }}
          >
            {/* Step node */}
            <div
              className="amc-roadmap-node"
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'var(--amc-node-bg)',
                border: '3px solid var(--amc-node-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--amc-node-icon)',
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              <step.icon size={26} />
            </div>

            {/* Step card */}
            <div className="amc-roadmap-card-wrap" style={{ flex: 1, minWidth: 0 }}>
              <RoadmapStepCard step={step} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .amc-roadmap {
          --amc-primary: #0d9488;
          --amc-primary-dark: #0f766e;
          --amc-secondary: #0891b2;
          --amc-bg: rgba(13, 148, 136, 0.08);
          --amc-border: rgba(13, 148, 136, 0.25);
          --amc-connector: linear-gradient(180deg, var(--amc-primary) 0%, var(--amc-secondary) 100%);
          --amc-node-bg: var(--bg-primary);
          --amc-node-border: var(--amc-primary);
          --amc-node-icon: var(--amc-primary);
        }
        [data-theme="light"] .amc-roadmap {
          --amc-bg: rgba(13, 148, 136, 0.1);
          --amc-border: rgba(13, 148, 136, 0.35);
        }
        .amc-roadmap-card {
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--amc-border);
          border-radius: 16px;
          padding: 1rem 1.25rem;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .amc-roadmap-card:hover {
          border-color: var(--amc-primary);
          box-shadow: 0 8px 32px rgba(13, 148, 136, 0.12);
        }
        .amc-roadmap-node {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .amc-roadmap-card-wrap:hover .amc-roadmap-node {
          transform: scale(1.05);
          box-shadow: 0 0 0 4px var(--amc-bg);
        }
      `}</style>
    </div>
  )
}

function RoadmapStepCard({ step }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="amc-roadmap-card">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        style={{
          width: '100%',
          textAlign: 'left',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
          color: 'inherit',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
              {step.title}
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
              {step.shortDesc}
            </p>
          </div>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--amc-primary)',
              flexShrink: 0,
            }}
          >
            <HiInformationCircle size={18} />
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiChevronDown size={18} />
            </motion.span>
          </span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--amc-border)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              {step.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
