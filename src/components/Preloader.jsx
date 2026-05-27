import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onComplete }) => {
  const [isScored, setIsScored] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const goalRef = useRef(null)
  const screenRef = useRef(null)

  const checkCollision = (info) => {
    if (!goalRef.current || isScored) return
    const goalRect = goalRef.current.getBoundingClientRect()
    const x = info.point.x
    const y = info.point.y

    // Very forgiving UX: trigger goal if pointer is within or near the net
    const padding = 50
    if (
      x >= goalRect.left - padding &&
      x <= goalRect.right + padding &&
      y >= goalRect.top - padding &&
      y <= goalRect.bottom + padding
    ) {
      setIsScored(true)
      // Celebrate then exit
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => onComplete(), 800)
      }, 1000)
    }
  }

  const handleDrag = (event, info) => {
    checkCollision(info)
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          ref={screenRef}
          className="fixed inset-0 z-[9999] bg-dark-900 flex flex-col items-center justify-between py-12 md:py-20 overflow-hidden"
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background elements */}
          <div className="absolute inset-0 barca-stripes-visible opacity-[0.03]" />
          <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-4 border-white/10 z-0 pointer-events-none" />
          
          <div className="relative z-10 text-center mt-4 mb-8">
            <h1 className="font-display text-4xl md:text-6xl text-light-100 mb-2">
              KICK OFF <span className="text-barca-gold">YOUR JOURNEY</span>
            </h1>
            <p className="font-heading tracking-[0.2em] text-light-400 text-xs md:text-sm uppercase">
              Drag the ball into the net to enter
            </p>
          </div>

          {/* Goal Net */}
          <div 
            ref={goalRef}
            className={`relative z-10 w-64 h-32 md:w-80 md:h-40 border-t-4 border-l-4 border-r-4 rounded-t-xl flex items-center justify-center transition-all duration-300 ${
              isScored 
                ? 'border-barca-gold bg-barca-gold/20 shadow-[0_0_50px_rgba(237,187,0,0.3)]' 
                : 'border-white/30 bg-white/5'
            }`}
          >
            {/* Net Grid */}
            <div 
              className="absolute inset-0 opacity-30 rounded-t-xl" 
              style={{ 
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.6) 2px, transparent 2px)', 
                backgroundSize: '20px 20px' 
              }} 
            />
            
            <AnimatePresence>
              {isScored && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-display text-5xl md:text-6xl text-barca-gold z-20 text-stroke drop-shadow-2xl"
                >
                  GOLAZO!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1" />

          {/* Football */}
          <motion.div
            drag={!isScored}
            dragConstraints={screenRef}
            dragElastic={0.4}
            onDrag={handleDrag}
            onDragEnd={handleDrag}
            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
            className={`z-30 cursor-grab text-7xl md:text-8xl touch-none mb-12 ${isScored ? 'pointer-events-none' : ''}`}
            animate={
              isScored 
                ? { scale: 0, opacity: 0, rotate: 360 } 
                : { y: [0, -20, 0] }
            }
            transition={
              isScored 
                ? { duration: 0.5, ease: "backIn" } 
                : { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }
          >
            ⚽️
          </motion.div>

          <div className="absolute bottom-6 text-barca-gold/30 font-heading text-[10px] tracking-[0.3em] uppercase z-10 pointer-events-none">
            FC Barcelona Themed Portfolio
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
