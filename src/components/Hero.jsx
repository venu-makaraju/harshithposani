import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown, HiLocationMarker } from 'react-icons/hi'
import { SiTensorflow, SiPytorch, SiPython, SiDocker, SiKubernetes } from 'react-icons/si'
import { SocialLinks } from './SocialLinks'

const TITLE_TEXT = 'AI/ML Engineer | Deep Learning | NLP | MLOps'
const TYPING_SPEED = 80
const CURSOR_BLINK_MS = 530

const floatingIcons = [
  { Icon: SiTensorflow, size: 28, x: '8%', y: '18%', delay: 0, duration: 6 },
  { Icon: SiPytorch, size: 26, x: '88%', y: '22%', delay: 0.8, duration: 7 },
  { Icon: SiPython, size: 32, x: '12%', y: '72%', delay: 1.2, duration: 5.5 },
  { Icon: SiDocker, size: 24, x: '85%', y: '68%', delay: 0.3, duration: 6.5 },
  { Icon: SiKubernetes, size: 26, x: '78%', y: '12%', delay: 1.5, duration: 5 },
  { Icon: SiTensorflow, size: 20, x: '18%', y: '42%', delay: 2, duration: 7.2 },
  { Icon: SiPytorch, size: 22, x: '92%', y: '55%', delay: 0.5, duration: 6 },
]

function TypingTitle({ text, speed, onComplete }) {
  const [display, setDisplay] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (display.length >= text.length) {
      onComplete?.()
      return
    }
    const t = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), speed)
    return () => clearTimeout(t)
  }, [display, text, speed, onComplete])

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span style={{ display: 'inline-block', minHeight: '1.4em' }}>
      {display}
      <span
        style={{
          opacity: cursorVisible ? 1 : 0,
          marginLeft: 2,
          borderRight: '2px solid var(--accent)',
          animation: 'cursor-pulse 1s ease-in-out infinite',
        }}
      >
        &#8203;
      </span>
    </span>
  )
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="section-padding hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient background */}
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="hero-bg-mesh" aria-hidden="true" />

      {/* Floating tech icons */}
      <div className="hero-floating-icons" aria-hidden="true">
        {floatingIcons.map(({ Icon, size, x, y, delay, duration }, i) => (
          <motion.span
            key={i}
            className="hero-float-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ delay: 1.2 + delay * 0.2, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              color: 'var(--accent)',
              '--float-duration': `${duration}s`,
              '--float-delay': `${delay}s`,
            }}
          >
            <Icon size={size} />
          </motion.span>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 800,
        }}
      >
        <motion.p
          variants={item}
          style={{
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          Welcome
        </motion.p>

        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          Harshith Posani
        </motion.h1>

        <motion.div
          variants={item}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            minHeight: '2.2em',
            marginBottom: '0.5rem',
          }}
        >
          <TypingTitle text={TITLE_TEXT} speed={TYPING_SPEED} />
        </motion.div>

        <motion.p
          variants={item}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            marginBottom: '2rem',
          }}
        >
          <HiLocationMarker size={18} />
          Tampa, FL
        </motion.p>

        <motion.div
          variants={item}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <motion.button
            type="button"
            className="hero-btn hero-btn-primary"
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            className="hero-btn hero-btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            type="button"
            className="hero-btn hero-btn-outline"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div variants={item} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <SocialLinks size={26} />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hero-scroll-down"
        onClick={(e) => {
          e.preventDefault()
          scrollTo('about')
        }}
      >
        <HiChevronDown size={28} />
      </motion.a>

      <style>{`
        .hero-section {
          --hero-gradient-1: rgba(99, 102, 241, 0.12);
          --hero-gradient-2: rgba(139, 92, 246, 0.08);
          --hero-gradient-3: rgba(168, 85, 247, 0.1);
        }
        [data-theme="light"] .hero-section {
          --hero-gradient-1: rgba(79, 70, 229, 0.15);
          --hero-gradient-2: rgba(109, 40, 217, 0.1);
          --hero-gradient-3: rgba(124, 58, 237, 0.12);
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 100% 60% at 50% -10%, var(--hero-gradient-1), transparent 50%),
            radial-gradient(ellipse 80% 50% at 80% 50%, var(--hero-gradient-2), transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 80%, var(--hero-gradient-3), transparent 50%);
          animation: hero-gradient-shift 12s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .hero-bg-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: hero-mesh-move 20s linear infinite;
          pointer-events: none;
        }
        @keyframes hero-gradient-shift {
          0% { opacity: 1; transform: scale(1) translate(0, 0); }
          100% { opacity: 0.9; transform: scale(1.05) translate(2%, 1%); }
        }
        @keyframes hero-mesh-move {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        .hero-floating-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-float-icon {
          animation: hero-float var(--float-duration) ease-in-out infinite;
          animation-delay: var(--float-delay);
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1.35rem;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 12px;
          transition: box-shadow 0.2s, filter 0.2s;
        }
        .hero-btn-primary {
          background: var(--gradient);
          color: white;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
        }
        .hero-btn-primary:hover {
          box-shadow: 0 6px 28px rgba(99, 102, 241, 0.45);
          filter: brightness(1.05);
        }
        .hero-btn-secondary {
          background: var(--bg-glass);
          color: var(--text-primary);
          border: 1px solid var(--bg-glass-border);
          backdrop-filter: blur(12px);
        }
        .hero-btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .hero-btn-outline {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }
        .hero-btn-outline:hover {
          background: rgba(99, 102, 241, 0.12);
        }

        .hero-scroll-down {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: hero-bounce 2s ease-in-out infinite;
        }
        .hero-scroll-down:hover {
          color: var(--accent);
        }
        @keyframes hero-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes cursor-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
