'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  // Auto-demo animation on load
  useEffect(() => {
    const demoAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Wait for initial load
      
      // Simulate mouse movement in a smooth pattern
      await animate(mouseX, 150, { duration: 0.8, ease: "easeInOut" })
      await animate(mouseY, -100, { duration: 0.8, ease: "easeInOut" })
      await animate(mouseX, -150, { duration: 0.8, ease: "easeInOut" })
      await animate(mouseY, 100, { duration: 0.8, ease: "easeInOut" })
      await animate(mouseX, 0, { duration: 0.8, ease: "easeInOut" })
      await animate(mouseY, 0, { duration: 0.8, ease: "easeInOut" })
    }
    
    demoAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    animate(mouseX, 0, { duration: 0.5 })
    animate(mouseY, 0, { duration: 0.5 })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0,0,0,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col items-start space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400"
          >
            {t.hero.title}
          </motion.div>

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
            className="relative"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black dark:text-white leading-[0.9] cursor-default select-none relative"
            >
              {['D', 'i', 'o', 'n'].map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  whileHover={{ 
                    y: -10,
                    color: isHovered ? '#666' : undefined,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {['V', 'a', 'n', ' ', 'H', 'e', 'c', 'k', 'e'].map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  whileHover={{ 
                    y: -10,
                    color: isHovered ? '#666' : undefined,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Floating elements around name */}
            <motion.div
              className="absolute -left-8 top-1/4 w-2 h-2 rounded-full bg-black dark:bg-white"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 top-1/2 w-3 h-3 rounded-full bg-black dark:bg-white"
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>

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
            className="flex gap-6 items-center flex-wrap"
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

            <Link href="/game">
              <motion.span
                whileHover={{ x: 4 }}
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block"
              >
                Profile Quiz
              </motion.span>
            </Link>

            <Link href="/resume">
              <motion.span
                whileHover={{ x: 4 }}
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block"
              >
                Resume
              </motion.span>
            </Link>

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
