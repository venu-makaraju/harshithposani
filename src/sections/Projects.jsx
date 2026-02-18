import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { FILTERS, PROJECTS } from '../data/projectsData'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
  exit: { opacity: 0 },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96 },
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected ML and engineering work."
    >
      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem',
          justifyContent: 'center',
        }}
      >
        {FILTERS.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            className={`project-tab ${activeFilter === filter ? 'project-tab-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: 12,
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '2px solid transparent',
              background: activeFilter === filter ? 'var(--gradient)' : 'var(--card-bg)',
              color: activeFilter === filter ? 'white' : 'var(--text-secondary)',
              transition: 'background 0.2s, color 0.2s, border-color 0.2s',
            }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Project grid */}
      <motion.div
        layout
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={card} />
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .project-tab {
          cursor: pointer;
        }
        .project-tab:hover:not(.project-tab-active) {
          background: var(--bg-glass) !important;
          color: var(--text-primary) !important;
          border-color: var(--bg-glass-border) !important;
        }
        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          transition: box-shadow 0.2s, filter 0.2s;
        }
        .project-btn-primary {
          background: var(--gradient);
          color: white;
          border: none;
        }
        .project-btn-primary:hover {
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
          filter: brightness(1.05);
        }
        .project-btn-outline {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }
        .project-btn-outline:hover {
          background: rgba(99, 102, 241, 0.12);
        }
        .project-btn-ghost {
          border: 1px solid var(--bg-glass-border);
          color: var(--text-secondary);
          background: var(--card-bg);
        }
        .project-btn-ghost:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
      `}</style>
    </Section>
  )
}
