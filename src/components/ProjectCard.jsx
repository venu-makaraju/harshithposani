import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiX } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { LazyImage } from './LazyImage'

export function ProjectCard({ project, variants }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.article
        variants={variants}
        className="project-card glass"
        layout
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.25s, box-shadow 0.25s',
        }}
        whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
      >
        <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
          <LazyImage
            src={project.image}
            alt={`${project.title} project preview`}
            width={600}
            height={375}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.6rem' }}>
            {project.categories.map((cat) => (
              <span
                key={cat}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 6,
                  background: 'var(--gradient)',
                  color: 'white',
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
            {project.description}
          </p>
          {project.metrics && project.metrics.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              {project.metrics.map((m) => (
                <span key={m.label} style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                  {m.value} <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{m.label}</span>
                </span>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {project.techStack.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiExternalLink size={16} />
                Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub size={16} />
                GitHub
              </motion.a>
            )}
            <motion.button
              type="button"
              className="project-btn project-btn-ghost"
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Case Study
            </motion.button>
          </div>
        </div>
      </motion.article>

      <CaseStudyModal project={project} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

function CaseStudyModal({ project, open, onClose }) {
  useEffect(() => {
    if (!open) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!project.caseStudy) return null

  const { problem, solution, results } = project.caseStudy

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
            }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="project-modal glass"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(90vw, 560px)',
              maxHeight: '85vh',
              overflow: 'auto',
              borderRadius: 24,
              padding: '1.75rem',
              zIndex: 1001,
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <h2 id="case-study-title" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                {project.title} — Case Study
              </h2>
              <motion.button
                type="button"
                aria-label="Close"
                onClick={onClose}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                whileHover={{ background: 'var(--card-bg)' }}
              >
                <HiX size={22} />
              </motion.button>
            </div>
            {problem && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Problem
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{problem}</p>
              </div>
            )}
            {solution && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Solution
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{solution}</p>
              </div>
            )}
            {results && (
              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Results
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{results}</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
