import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Smooth scroll for anchor links
  useEffect(() => {
    if (isLoading) return

    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isLoading])

  return (
    <>
      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <div className="blaugrana-gradient min-h-screen">
          <Navbar />
          
          <main>
            <Hero />
            <Marquee />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}

export default App
