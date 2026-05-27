import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const stats = [
    { number: '1st', label: 'Year B.Tech', icon: '🎓' },
    { number: 'C++', label: 'Primary Language', icon: '💻' },
    { number: 'DSA', label: 'Core Focus', icon: '🧠' },
    { number: 'AI', label: 'Future Goal', icon: '🤖' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <section id="about" ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background decorations */}
      <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] -top-40 -right-40 opacity-20" />
      <div className="grid-pattern absolute inset-0 opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-barca-gold" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-barca-gold">
                The Foundation
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-light-100 mb-2">
              BUILDING <span className="text-gradient-blaugrana">FROM</span>
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-stroke">
              THE GROUND UP
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-body text-lg text-light-300 leading-relaxed">
                I am a first-year B.Tech student with a deep passion for <span className="text-barca-gold font-medium">systems engineering, AI, and sports analytics.</span> Instead of rushing to learn the latest frameworks, I am focusing on building an unshakeable foundation in Computer Science.
              </p>
              <p className="font-body text-base text-light-400 leading-relaxed">
                I approach programming with a focus on deep understanding. My current primary tools are <span className="text-barca-blue">C++</span> and <span className="text-barca-red-light">Data Structures & Algorithms</span>. I believe in <span className="text-light-200 font-medium">logic over memorization</span> and prefer building actual systems rather than just consuming tutorials.
              </p>
              <p className="font-body text-base text-light-400 leading-relaxed">
                Outside of core computer science, my biggest interest lies at the intersection of technology and football (which inspired this FC Barcelona themed portfolio). My long-term vision is to apply <span className="text-barca-gold italic">Machine Learning and Artificial Intelligence to football data and performance analysis.</span> 
              </p>

              <motion.div className="pt-4 flex gap-4" variants={itemVariants}>
                <a href="#contact" className="btn-barca">
                  <span>Get In Touch</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Stats + Formation Card */}
            <motion.div variants={itemVariants}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card rounded-2xl p-6 text-center group"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  >
                    <span className="text-2xl mb-2 block">{stat.icon}</span>
                    <span className="stat-number block mb-1 group-hover:text-barca-gold transition-colors text-[2rem] md:text-[3rem]">
                      {stat.number}
                    </span>
                    <span className="font-heading text-xs tracking-[0.15em] uppercase text-light-400">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Personal Philosophy Card */}
              <motion.div
                className="glass-card rounded-2xl relative"
                whileHover={{ scale: 1.01 }}
              >
                <div className="barca-stripes rounded-2xl overflow-hidden" style={{ opacity: 0.06 }} />
                <div className="relative z-10 p-6 sm:p-8">
                  <span className="font-heading text-xs tracking-[0.2em] uppercase text-barca-gold block mb-4">
                    My Core Philosophy
                  </span>
                  <div className="font-display text-3xl text-light-100 mb-4">MINDSET</div>
                  <div className="space-y-3 font-body text-sm text-light-400">
                    <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2 gap-1">
                      <span className="text-light-200">Consistency beats intensity</span>
                      <span className="sm:text-right">Small daily progress</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2 gap-1">
                      <span className="text-light-200">Logic first</span>
                      <span className="text-barca-blue sm:text-right">Deep understanding</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2 gap-1">
                      <span className="text-light-200">Build before consuming</span>
                      <span className="text-barca-red-light sm:text-right">Practical application</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between pb-1 gap-1">
                      <span className="text-light-200">End goal</span>
                      <span className="text-barca-gold sm:text-right">Strong Engineering</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
