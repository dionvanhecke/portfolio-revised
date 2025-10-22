'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Alleen tonen bij eerste bezoek van de homepage
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('hasVisited')
      const isHomePage = window.location.pathname === '/'
      
      // Alleen laden als het de homepage is EN nog niet bezocht
      if (!hasVisited && isHomePage) {
        setIsLoading(true)
        sessionStorage.setItem('hasVisited', 'true')
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Alleen scroll blokkeren als we daadwerkelijk aan het laden zijn
    if (!isLoading) {
      // Zorg ervoor dat body altijd scrollbaar is als we niet laden
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      return
    }
    
    if (isLoading) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      document.documentElement.style.overflow = 'hidden'
    }

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
    }
  }, [isLoading, mounted])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-white dark:bg-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-7xl font-light tracking-tight text-black dark:text-white mb-4">
                Dion Van Hecke
              </h1>
              <p className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-64 h-[2px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                  className="h-full bg-black dark:bg-white"
                />
              </div>
              <span className="text-xs text-neutral-400 dark:text-neutral-600 font-light">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
