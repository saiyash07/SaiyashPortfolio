import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onComplete }) => {
  const [isScored, setIsScored] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const goalRef = useRef(null)
  const screenRef = useRef(null)
  const ballRef = useRef(null)

  const checkCollision = () => {
    if (!goalRef.current || !ballRef.current || isScored) return
    const goalRect = goalRef.current.getBoundingClientRect()
    const ballRect = ballRef.current.getBoundingClientRect()

    const ballCenterX = ballRect.left + ballRect.width / 2
    const ballCenterY = ballRect.top + ballRect.height / 2

    // Extremely forgiving: triggers as soon as the ball's center enters the goal area
    const paddingX = 60
    const paddingY = 20

    if (
      ballCenterX >= goalRect.left - paddingX &&
      ballCenterX <= goalRect.right + paddingX &&
      ballCenterY <= goalRect.bottom + paddingY
    ) {
      setIsScored(true)
      // Celebrate then exit
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => onComplete(), 800)
      }, 1000)
    }
  }

  const handleDrag = () => {
    checkCollision()
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          ref={screenRef}
          className="fixed inset-0 z-[9999] bg-dark-900 flex flex-col items-center justify-between py-12 md:py-20 overflow-hidden select-none"
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background Image of Camp Nou */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img 
              src="/camp-nou.png" 
              alt="Camp Nou Stadium" 
              className="w-full h-full object-cover opacity-15 filter brightness-[0.4] contrast-[1.1] select-none pointer-events-none"
            />
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900/40" />
          </div>

          {/* Kickoff Center Circle */}
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
            ref={ballRef}
            drag={!isScored}
            dragConstraints={screenRef}
            dragElastic={0.4}
            dragSnapToOrigin={true}
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
