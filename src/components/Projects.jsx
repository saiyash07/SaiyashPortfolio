import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Brain Forge',
    category: 'Full Stack • AI App',
    description: 'An AI-powered, all-in-one student productivity and learning platform. Auto-generates course materials from PDFs, tracks energy-based tasks, manages college timetables, and monitors wellbeing — all powered by Gemini 1.5 Flash.',
    tech: ['Next.js', 'Firebase', 'Google Gemini API', 'Google Apps Script'],
    color: 'barca-blue',
    number: '01',
    gradient: 'from-barca-blue/20 to-transparent',
    link: 'https://brain-forge-omega.vercel.app',
    linkText: 'Go To Site',
  },
  {
    id: 2,
    title: 'Footy Shorts AI',
    category: 'Full Stack • Sports Tech',
    description: 'An automated football shorts pipeline — detects new clips from Google Drive, uses Gemini AI to generate viral titles & hashtags, then uploads directly to YouTube Shorts. Fully containerised and production-ready.',
    tech: ['FastAPI + Python', 'Google Gemini AI', 'Google APIs (Drive + YouTube)', 'Docker + Render'],
    color: 'barca-red',
    number: '02',
    gradient: 'from-barca-red/20 to-transparent',
    link: 'https://github.com/saiyash07/FootyShortsAI',
    linkText: 'View Code',
  },
  {
    id: 3,
    title: 'AI Football Analytics',
    category: 'Future Project • Sports Tech',
    description: 'A planned machine learning system to analyze player movement and passing networks from match data to extract tactical insights.',
    tech: ['Python', 'Machine Learning', 'Data Science', 'Vision'],
    color: 'barca-gold',
    number: '03',
    gradient: 'from-barca-gold/20 to-transparent',
    link: 'https://github.com/saiyash07/AI-FOOTBALL-ANALYTICS',
    linkText: 'View Code',
  },
  {
    id: 4,
    title: 'DEUTSCH MEISTER',
    category: 'Full Stack • EdTech',
    description: 'A comprehensive, Duolingo-style learning application designed to guide users from A1 to C2 proficiency. Features a custom Gemini-powered AI tutor, interactive exercises, and cloud-synchronized progress tracking.',
    tech: ['React.js', 'Firebase', 'Gemini AI', 'Architecture'],
    color: 'barca-blue',
    number: '04',
    gradient: 'from-barca-blue/20 to-transparent',
    link: 'https://deutsch-meister-xi.vercel.app',
    linkText: 'Go To Site',
  },
]

const ProjectCard = ({ project, index, isInView }) => {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="glass-card rounded-2xl overflow-hidden relative h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Grid pattern in image area */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* Large number */}
          <motion.span
            className="absolute -right-4 -top-4 font-display text-[10rem] leading-none opacity-5 text-light-100 group-hover:opacity-10 transition-opacity duration-500"
          >
            {project.number}
          </motion.span>

          {/* Category badge */}
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 rounded-full bg-dark-900/60 backdrop-blur-md border border-white/10 font-heading text-xs tracking-[0.15em] uppercase text-light-300">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
          >
            <motion.div className="flex gap-3">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-barca text-xs py-2 px-4 inline-block">
                  <span>{project.linkText || 'Go To Site'}</span>
                </a>
              ) : (
                <a href="https://github.com/saiyash07" target="_blank" rel="noopener noreferrer" className="btn-barca text-xs py-2 px-4 inline-block">
                  <span>View Code</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="font-display text-2xl md:text-3xl text-light-100 mb-3 group-hover:text-barca-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-sm text-light-400 leading-relaxed mb-6">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto pb-1">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-white/8 bg-white/3 font-body text-xs text-light-300 hover:border-barca-gold/30 hover:text-barca-gold transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-blue w-[500px] h-[500px] top-1/4 -right-40 opacity-15" />
      <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] bottom-1/4 -left-20 opacity-10" />

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
              What I Build
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-light-100 mb-2">
            PRACTICAL <span className="text-gradient-blaugrana">APPLICATION</span>
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-stroke">
            OF KNOWLEDGE
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
