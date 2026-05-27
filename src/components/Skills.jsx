import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  {
    category: 'CURRENT CORE',
    subtitle: 'Building Foundations',
    icon: '⚡',
    color: 'from-barca-gold to-yellow-500',
    borderColor: 'border-barca-gold/20',
    items: [
      { name: 'C++', level: 85 },
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 75 },
      { name: 'Pointers & Memory', level: 70 },
      { name: 'Problem Solving', level: 85 },
    ],
  },
  {
    category: 'WEB STACK',
    subtitle: 'Frontend Creation',
    icon: '💻',
    color: 'from-barca-blue to-blue-400',
    borderColor: 'border-barca-blue/20',
    items: [
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Git & Version Control', level: 75 },
    ],
  },
  {
    category: 'FUTURE VISION',
    subtitle: 'AI & Systems',
    icon: '🤖',
    color: 'from-barca-red to-red-400',
    borderColor: 'border-barca-red/20',
    items: [
      { name: 'Machine Learning', level: 20 },
      { name: 'AI Systems', level: 15 },
      { name: 'Python', level: 35 },
      { name: 'Systems Engineering', level: 25 },
      { name: 'Advanced Mathematics', level: 40 },
    ],
  },
  {
    category: 'SPORTS TECH',
    subtitle: 'Data & Analytics',
    icon: '⚽',
    color: 'from-green-400 to-emerald-500',
    borderColor: 'border-green-500/20',
    items: [
      { name: 'Sports Analytics', level: 25 },
      { name: 'Data Visualization', level: 30 },
      { name: 'Performance Metrics', level: 40 },
      { name: 'Statistical Analysis', level: 35 },
      { name: 'Football Intelligence', level: 80 },
    ],
  },
]

const Skills = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

  return (
    <section id="skills" ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-red w-[500px] h-[500px] -bottom-40 -left-40 opacity-15" />
      <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] top-20 right-20 opacity-10" />
      <div className="grid-pattern absolute inset-0 opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-barca-gold" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-barca-gold">
              Tech Stack & Roadmap
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-light-100 mb-2">
            CURRENT <span className="text-gradient-gold">FOCUS</span>
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-stroke">
            AND FUTURE GOALS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className={`glass-card rounded-2xl p-8 relative overflow-hidden ${category.borderColor}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-display text-2xl text-light-100">{category.category}</h3>
                  </div>
                  <span className="font-heading text-xs tracking-[0.2em] uppercase text-light-400">
                    {category.subtitle}
                  </span>
                </div>
                {/* Position badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center">
                  <span className="font-display text-xl text-light-300">{catIdx + 1}</span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIdx * 0.15 + skillIdx * 0.08, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="font-heading text-sm text-light-200">{skill.name}</span>
                      <span className="font-body text-xs text-light-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.5 + catIdx * 0.15 + skillIdx * 0.1,
                          duration: 1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative stripe at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
