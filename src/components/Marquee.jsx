import { motion } from 'framer-motion'

const Marquee = () => {
  const items = [
    'REACT', '⚽', 'JAVASCRIPT', '🔵', 'C++', '🔴', 'PYTHON', '⚽',
    'BLENDER', '🟡', 'NEXT.JS', '⚽', 'TAILWIND', '🔵', 'SPORTS ANALYTICS', '🔴',
  ]

  return (
    <div className="relative py-8 overflow-hidden border-y border-white/5 bg-dark-800/50">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-display text-4xl md:text-6xl mx-6 md:mx-10 whitespace-nowrap ${
              item.length <= 2
                ? 'text-3xl md:text-5xl'
                : 'text-stroke hover:![-webkit-text-fill-color:var(--color-barca-gold)] cursor-default transition-all duration-300'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
