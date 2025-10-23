'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col items-start space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400"
          >
            {t.hero.title}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black dark:text-white leading-[0.9] cursor-default select-none"
          >
            Dion
            <br />
            Van Hecke
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light leading-relaxed"
          >
            {t.hero.description}<br />{t.hero.description2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6 items-center"
          >
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-black dark:text-white font-medium"
            >
              <span>{t.hero.viewWork}</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            <span className="text-neutral-300 dark:text-neutral-700">|</span>

            <motion.a
              whileHover={{ x: 4 }}
              href="https://github.com/dionvanhecke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ x: 4 }}
              href="https://be.linkedin.com/in/dionvanhecke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
