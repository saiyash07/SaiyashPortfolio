import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const roadmap = [
  {
    id: 1,
    stage: 'STAGE 1',
    period: 'CURRENT FOCUS',
    title: 'Core Foundations',
    subtitle: 'C++ & Data Structures',
    description: 'Building an unshakeable foundation in Computer Science. Focusing on memory management, pointers, algorithmic efficiency, and complex problem-solving in C++ and JavaScript.',
    color: 'border-barca-gold',
    dotColor: 'bg-barca-gold',
  },
  {
    id: 2,
    stage: 'STAGE 2',
    period: 'NEXT PHASE',
    title: 'AI & Mathematics',
    subtitle: 'Machine Learning Basics',
    description: 'Diving into the mathematics behind AI. Learning Python for data manipulation, understanding neural networks, and building small-scale predictive models.',
    color: 'border-barca-blue',
    dotColor: 'bg-barca-blue',
  },
  {
    id: 3,
    stage: 'STAGE 3',
    period: 'LONG-TERM',
    title: 'Systems Thinking',
    subtitle: 'Architecture & Scalability',
    description: 'Moving beyond syntax to understand how large-scale systems work. Learning about system design, databases, API architecture, and cloud infrastructure.',
    color: 'border-barca-red',
    dotColor: 'bg-barca-red',
  },
  {
    id: 4,
    stage: 'STAGE 4',
    period: 'THE GOAL',
    title: 'Intelligent Sports Analytics',
    subtitle: 'AI + Football',
    description: 'Combining my passion for FC Barcelona and technology. Building AI systems capable of analyzing football matches, player positioning, and tactical patterns.',
    color: 'border-light-100',
    dotColor: 'bg-light-100',
  },
]

const Roadmap = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-red w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-24 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-barca-gold" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-barca-gold">
              The Roadmap
            </span>
            <span className="w-12 h-[1px] bg-barca-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-light-100 mb-2">
            STEP-BY-STEP <span className="text-gradient-gold">JOURNEY</span>
          </h2>
          <p className="font-body text-light-400 mt-6 max-w-2xl text-center">
            A clear vision of where I am and where I am going. Focused on deep learning rather than quick wins.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 top-0 flex items-center justify-center w-14 h-14 md:-translate-x-1/2 bg-dark-900 border-4 border-dark-900 z-10">
                  <div className={`w-4 h-4 rounded-full ${item.dotColor} shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${item.color}`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Empty Half (for desktop grid) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Half */}
                <div className="pl-20 md:pl-0 md:w-1/2 flex flex-col justify-center">
                  <div
                    className={`glass-card p-8 rounded-2xl border-l-4 ${item.color} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-heading text-xs tracking-[0.2em] uppercase text-barca-gold">
                          {item.stage}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-light-500" />
                        <span className="font-body text-xs text-light-400 uppercase tracking-widest">
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-3xl text-light-100 mb-1">
                        {item.title}
                      </h3>
                      <h4 className="font-body text-base text-light-300 mb-4 font-medium">
                        {item.subtitle}
                      </h4>
                      
                      <p className="font-body text-sm text-light-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
