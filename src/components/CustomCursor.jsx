import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  
  // Use framer-motion's high performance values instead of React state
  // This eliminates the lag caused by re-rendering on every mouse move
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Apply a tight spring for fast, smooth following without lag
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const rotation = useSpring(useMotionValue(0), { damping: 20, stiffness: 300, mass: 0.1 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set values instantly without causing React re-renders
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      // Make it roll quickly
      rotation.set(e.clientX * 0.8)
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [mouseX, mouseY, rotation])

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <style>{`
        body, a, button, .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
      
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center drop-shadow-xl"
        style={{
          x,
          y,
          rotate: rotation,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
        }}
        transition={{ 
          scale: { duration: 0.15 }
        }}
      >
        <div 
          className="relative flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          {/* Classic Realistic Football (Telstar pattern) */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" 
            alt="football cursor" 
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}
          />
        </div>
      </motion.div>
    </>
  )
}

export default CustomCursor
