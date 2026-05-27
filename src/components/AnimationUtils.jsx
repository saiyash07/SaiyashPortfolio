import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

const SectionReveal = ({ children, className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -50}px`, `${speed * 50}px`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

const TextReveal = ({ text, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              delay: delay + i * 0.05,
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.15
    const y = (clientY - top - height / 2) * 0.15
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)'
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  return (
    <div
      ref={ref}
      className={`inline-block transition-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}

const FootballIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2C12 2 14.5 6 14.5 12C14.5 18 12 22 12 22"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
    <path
      d="M12 2C12 2 9.5 6 9.5 12C9.5 18 12 22 12 22"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path
      d="M3.5 7H20.5"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.3"
    />
    <path
      d="M3.5 17H20.5"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.3"
    />
  </svg>
)

export { SectionReveal, ParallaxSection, TextReveal, MagneticButton, FootballIcon }
