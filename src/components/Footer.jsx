import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      {/* Pre-footer CTA Banner */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-barca-blue/10 via-dark-900 to-barca-red/10" />
        <div className="barca-stripes" style={{ opacity: 0.03 }} />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl text-light-100 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MORE THAN A
          </motion.h2>
          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl shimmer-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            STUDENT
          </motion.h2>
          <motion.p
            className="font-body text-base text-light-400 max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Always learning. Ready to tackle hard problems and build intelligent systems.
          </motion.p>
          <motion.a
            href="#contact"
            className="btn-barca inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span>Start A Project</span>
          </motion.a>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Footer Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-barca-blue to-barca-red opacity-80" />
              <div className="absolute inset-[2px] rounded-full bg-dark-900 flex items-center justify-center">
                <span className="font-display text-sm text-barca-gold">P</span>
              </div>
            </div>
            <span className="font-heading text-sm tracking-[0.15em] uppercase text-light-300">
              Portfolio
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-light-400 text-center">
            © {currentYear} — Designed with ❤️ and ⚽ • 
            <span className="text-barca-gold"> Visça el Barça!</span>
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-heading text-xs tracking-[0.15em] uppercase text-light-400 hover:text-barca-gold transition-colors duration-300"
            whileHover={{ y: -2 }}
          >
            Back To Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
