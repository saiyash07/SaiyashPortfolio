import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const Contact = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [copied, setCopied] = useState(false)

  const socials = [
    { name: 'GitHub', icon: '🔗', href: 'https://github.com/saiyash07' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/saiyashpoojari/' },
    { name: 'Phone', icon: '📱', href: 'tel:8454034440' },
    { name: 'Instagram', icon: '📸', href: 'https://www.instagram.com/saiyaas.hh/' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/9615bd5b85064410bfb05a0576ae5855', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `⚽ Portfolio Message from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('poojarisaiyash@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
      <div className="gradient-orb gradient-orb-red w-[400px] h-[400px] bottom-0 right-0 opacity-10" />
      <div className="barca-stripes" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-barca-gold" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-barca-gold">
              Get In Touch
            </span>
            <span className="w-12 h-[1px] bg-barca-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-light-100 mb-2">
            LET'S <span className="text-gradient-gold">CONNECT</span>
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-stroke mb-8">
            AND BUILD
          </h2>
          <p className="font-body text-lg text-light-400 max-w-xl mx-auto">
            Whether you want to discuss AI, sports analytics, data structures, or just talk about the beautiful game, my inbox is always open. Let's learn and build together.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl text-light-100 mb-6">Send A Pass</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="font-heading text-xs tracking-[0.15em] uppercase text-light-400 block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full bg-dark-700/50 border border-white/8 rounded-xl px-4 py-3.5 font-body text-sm text-light-100 placeholder:text-light-400/50 focus:outline-none focus:border-barca-gold/50 focus:shadow-[0_0_20px_rgba(237,187,0,0.1)] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="font-heading text-xs tracking-[0.15em] uppercase text-light-400 block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-dark-700/50 border border-white/8 rounded-xl px-4 py-3.5 font-body text-sm text-light-100 placeholder:text-light-400/50 focus:outline-none focus:border-barca-gold/50 focus:shadow-[0_0_20px_rgba(237,187,0,0.1)] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="font-heading text-xs tracking-[0.15em] uppercase text-light-400 block mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project..."
                        className="w-full bg-dark-700/50 border border-white/8 rounded-xl px-4 py-3.5 font-body text-sm text-light-100 placeholder:text-light-400/50 focus:outline-none focus:border-barca-gold/50 focus:shadow-[0_0_20px_rgba(237,187,0,0.1)] transition-all duration-300 resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-barca w-full disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{status === 'submitting' ? 'Sending Pass...' : 'Send Message ⚽'}</span>
                    </motion.button>
                    {status === 'error' && (
                      <p className="text-red-400 font-body text-xs text-center mt-2">
                        ⚠️ Something went wrong. Please check your network and try again.
                      </p>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-celebration"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  {/* Goal Animation Arena */}
                  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden mb-6 bg-dark-800/40 rounded-xl border border-white/5">
                    {/* Pitch line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10" />
                    
                    {/* Goal Net */}
                    <motion.div 
                      className="absolute top-8 w-60 h-28 border-t-2 border-l-2 border-r-2 border-white/20 rounded-t-lg flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={{ 
                        y: [0, -4, 4, -2, 2, 0],
                        borderColor: ['rgba(255,255,255,0.2)', 'rgba(237,187,0,0.5)', 'rgba(237,187,0,0.3)'],
                        boxShadow: [
                          '0 0 0px rgba(237,187,0,0)',
                          '0 0 25px rgba(237,187,0,0.15)',
                          '0 0 10px rgba(237,187,0,0.05)'
                        ]
                      }}
                      transition={{ 
                        delay: 0.6, 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Net grid pattern */}
                      <div 
                        className="absolute inset-0 opacity-20 rounded-t-lg"
                        style={{ 
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', 
                          backgroundSize: '12px 12px' 
                        }} 
                      />
                    </motion.div>

                    {/* Shooting Ball */}
                    <motion.div
                      className="absolute bottom-2 text-5xl z-10 pointer-events-none select-none"
                      initial={{ y: 80, x: -60, rotate: 0, scale: 1.2 }}
                      animate={{ 
                        y: -30, 
                        x: 0,
                        rotate: 720,
                        scale: 0.75
                      }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1 
                      }}
                    >
                      ⚽
                    </motion.div>

                    {/* Net Shake / Goal Reaction */}
                    <motion.div
                      className="absolute top-6 font-display text-4xl text-barca-gold text-stroke select-none z-20 pointer-events-none"
                      initial={{ scale: 0, opacity: 0, rotate: -10 }}
                      animate={{ 
                        scale: [0, 1.3, 1], 
                        opacity: 1,
                        rotate: [-10, 5, 0] 
                      }}
                      transition={{ 
                        delay: 0.6, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200 
                      }}
                    >
                      GOLAZO!
                    </motion.div>
                  </div>

                  <h4 className="font-display text-2xl text-light-100 mb-2">PASS COMPLETED!</h4>
                  <p className="font-body text-sm text-light-400 max-w-sm mb-6 leading-relaxed">
                    Your message was delivered straight to my inbox. Thanks for connecting!
                  </p>
                  
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-xs py-2.5 px-5 cursor-pointer"
                  >
                    Send Another Pass
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Email Card (Clipboard action) */}
            <div 
              onClick={handleCopyEmail} 
              className="glass-card rounded-2xl p-6 group cursor-pointer block relative overflow-hidden active:scale-[0.99] transition-transform"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-heading text-xs tracking-[0.2em] uppercase text-light-400">
                  📧 Email
                </span>
                <span className={`text-[9px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-all duration-300 ${
                  copied 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                    : 'bg-white/5 border border-white/10 text-light-400 group-hover:border-barca-gold/30 group-hover:text-barca-gold'
                }`}>
                  {copied ? 'Copied!' : 'Click to Copy'}
                </span>
              </div>
              <span className="font-heading text-base md:text-lg text-light-100 group-hover:text-barca-gold transition-colors duration-300 truncate block">
                poojarisaiyash@gmail.com
              </span>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 group cursor-pointer">
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-light-400 block mb-2">
                📍 Location
              </span>
              <span className="font-heading text-lg text-light-100 group-hover:text-barca-gold transition-colors duration-300">
                Mumbai, India
              </span>
            </div>

            {/* Availability Card */}
            <div className="glass-card rounded-2xl p-6">
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-light-400 block mb-2">
                🟢 Availability
              </span>
              <span className="font-heading text-lg text-light-100">
                Open to learning & connecting
              </span>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-body text-xs text-green-400">Currently building foundations</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-light-400 block mb-4">
                ⚽ Find Me On
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-700/30 border border-white/5 hover:border-barca-gold/30 hover:bg-dark-600/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-heading text-sm text-light-300 group-hover:text-barca-gold transition-colors duration-300">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
