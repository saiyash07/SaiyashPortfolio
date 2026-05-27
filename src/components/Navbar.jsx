import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const navRef = useRef(null)
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 100], ['rgba(10,10,15,0)', 'rgba(10,10,15,0.9)'])
  const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)'])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Roadmap', href: '#experience' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      ref={navRef}
      style={{ backgroundColor: navBg, backdropFilter: navBlur, WebkitBackdropFilter: navBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Barca crest-inspired logo */}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-barca-blue to-barca-red opacity-80" />
            <div className="absolute inset-[2px] rounded-full bg-dark-900 flex items-center justify-center">
              <span className="font-display text-lg text-barca-gold tracking-wider">P</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border border-barca-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-light-100 group-hover:text-barca-gold transition-colors duration-300">
                Portfolio
              </span>
              <span className="px-1.5 py-0.5 rounded bg-barca-gold/15 border border-barca-gold/30 text-[8px] font-heading font-bold uppercase tracking-wider text-barca-gold">
                FC Barcelona Themed
              </span>
            </div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-light-400">
              Future Engineer
            </span>
          </div>
        </motion.a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.endsWith('.pdf') ? '_blank' : undefined}
              rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              className="relative font-heading text-xs tracking-[0.15em] uppercase text-light-300 hover:text-barca-gold transition-colors duration-300 group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-barca-blue to-barca-red group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block btn-barca text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Let's Talk</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 group" aria-label="Toggle menu">
          <span className="w-6 h-0.5 bg-light-100 group-hover:bg-barca-gold transition-colors duration-300" />
          <span className="w-4 h-0.5 bg-light-100 group-hover:bg-barca-gold transition-colors duration-300" />
          <span className="w-6 h-0.5 bg-light-100 group-hover:bg-barca-gold transition-colors duration-300" />
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
