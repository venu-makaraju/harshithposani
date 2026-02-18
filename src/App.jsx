import { lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })))
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })))
const AMCPathway = lazy(() => import('./sections/AMCPathway').then((m) => ({ default: m.AMCPathway })))

function Fallback() {
  return (
    <div className="section-padding" style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="status" aria-label="Loading">
      <div style={{ width: 40, height: 40, border: '3px solid var(--bg-glass-border)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} aria-hidden="true" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Experience />
        <Suspense fallback={<Fallback />}>
          <Projects />
          <Skills />
          <AMCPathway />
        </Suspense>
        <Contact />
        <Footer />
      </main>
    </>
  )
}
