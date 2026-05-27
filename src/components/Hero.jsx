import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.05,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  }

  const firstName = 'SAIYASH'.split('')
  const lastName = 'POOJARI'.split('')

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs - Removed infinite x/y animations for performance, kept scroll parallax */}
      <motion.div
        className="gradient-orb gradient-orb-blue w-[600px] h-[600px] -top-40 -left-40"
        style={{ y }}
      />
      <motion.div
        className="gradient-orb gradient-orb-red w-[500px] h-[500px] -bottom-20 -right-20"
        style={{ y }}
      />
      <motion.div
        className="gradient-orb gradient-orb-gold w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0.15 }}
      />

      {/* Jersey Stripes Background */}
      <div className="barca-stripes" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Football field circle (decorative) */}
      <div className="field-line w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="field-line w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity, scale }}
      >
        {/* Pre-title Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-barca-gold animate-pulse" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-light-300">
            1st Year B.Tech • Future AI Systems Engineer
          </span>
          <span className="w-[1px] h-3 bg-white/20" />
          <span className="font-heading text-[10px] tracking-[0.15em] uppercase text-barca-gold font-bold">
            FC Barcelona Themed
          </span>
        </motion.div>

        {/* Main Name */}
        <div className="overflow-hidden mb-2">
          <motion.div className="flex justify-center gap-2 md:gap-4" style={{ y: textY }}>
            {firstName.map((letter, i) => (
              <motion.span
                key={`first-${i}`}
                className="font-display text-[clamp(4rem,15vw,12rem)] leading-none text-light-100"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.div className="flex justify-center gap-2 md:gap-4">
            {lastName.map((letter, i) => (
              <motion.span
                key={`last-${i}`}
                className="font-display text-[clamp(4rem,15vw,12rem)] leading-none text-stroke"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i + firstName.length}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-heading text-lg md:text-xl text-light-300 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Building intelligent systems through <span className="text-barca-gold font-semibold">logic, code, and deep curiosity.</span> Small daily progress over shortcuts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn-barca"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>My Roadmap</span>
          </motion.a>
          <motion.a
            href="#about"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Squad Number Style */}
        <motion.div
          className="absolute -right-10 md:right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-display text-[20rem] md:text-[30rem] leading-none text-light-100">
            10
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-light-400">
          Scroll Down
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-light-400/30 flex justify-center pt-1.5"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-barca-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
