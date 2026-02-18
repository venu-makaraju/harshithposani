import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { SocialLinks } from '../components/SocialLinks'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Home() {
  return (
    <section
      id="home"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: 720 }}
      >
        <motion.p
          variants={item}
          style={{
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: '0.95rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          AI / ML Engineer
        </motion.p>
        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          Building intelligent systems that scale.
        </motion.h1>
        <motion.p
          variants={item}
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            marginBottom: '2rem',
          }}
        >
          Specializing in machine learning, deep learning, and production ML pipelines.
        </motion.p>
        <motion.div variants={item} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <SocialLinks size={26} />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
        }}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <HiChevronDown size={28} style={{ animation: 'bounce 2s infinite' }} />
      </motion.a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
