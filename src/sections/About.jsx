import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { SiTensorflow } from 'react-icons/si'
import { HiPhotograph, HiChip, HiAcademicCap } from 'react-icons/hi'

const achievements = [
  {
    icon: SiTensorflow,
    category: 'ML',
    title: '35% cost reduction',
    description: 'Via Reinforcement Learning—optimized operations and resource allocation in production.',
  },
  {
    icon: HiPhotograph,
    category: 'CV',
    title: '94% defect detection',
    description: 'Using ResNet-50 for visual inspection; deployed in manufacturing pipelines.',
  },
  {
    icon: HiChip,
    category: 'Data',
    title: '1M+ IoT events',
    description: 'Feature engineering and real-time pipelines for industrial sensor data.',
  },
  {
    icon: HiAcademicCap,
    category: 'Research',
    title: 'Published researcher',
    description: 'IEOM 2022—peer-reviewed work in operations and engineering management.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about turning data into decisions."
    >
      <motion.p
        className="about-intro"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: 640,
          marginBottom: '2.5rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          fontSize: '1rem',
        }}
      >
        I'm an AI/ML engineer focused on building scalable machine learning systems—
        from research and experimentation to deployment and monitoring. Here are some
        highlights from my work.
      </motion.p>

      <motion.div
        className="about-cards"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {achievements.map((item) => (
          <AchievementCard key={item.title} item={item} variants={card} />
        ))}
      </motion.div>

      <style>{`
        .about-card {
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--bg-glass-border);
          border-radius: 18px;
          padding: 1.5rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .about-card:hover {
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.08);
          transform: translateY(-4px);
        }
        .about-card:hover::before {
          opacity: 1;
        }
        [data-theme="light"] .about-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.12);
        }
      `}</style>
    </Section>
  )
}

function AchievementCard({ item, variants }) {
  const Icon = item.icon
  return (
    <motion.article
      className="about-card"
      variants={variants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div
        className="about-card-icon-wrap"
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: 'var(--gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginBottom: '1rem',
        }}
      >
        <Icon size={24} />
      </div>
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--accent)',
          marginBottom: '0.35rem',
        }}
      >
        {item.category}
      </span>
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {item.description}
      </p>
    </motion.article>
  )
}
