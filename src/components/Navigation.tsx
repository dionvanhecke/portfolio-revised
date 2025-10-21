'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'nl', name: 'NL', fullName: 'Nederlands' },
    { code: 'fr', name: 'FR', fullName: 'Français' },
    { code: 'en', name: 'EN', fullName: 'English' },
  ]

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
    { name: 'Resume', href: '/resume', isExternal: true },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-white/90 dark:bg-black/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-neutral-200 dark:border-neutral-800 shadow-xl">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
            className="px-4 py-2 text-sm font-semibold text-black dark:text-white"
          >
            DVH
          </motion.button>
          
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />
          
          {navItems.map((item) => (
            item.isExternal ? (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
                >
                  {item.name}
                </motion.div>
              </Link>
            ) : (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {item.name}
              </motion.button>
            )
          ))}
          
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </motion.button>
            
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full mt-2 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 shadow-xl p-2 min-w-[140px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'nl' | 'fr' | 'en')
                        setShowLangMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm rounded-xl transition-colors ${
                        language === lang.code
                          ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white font-medium'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/50'
                      }`}
                    >
                      {lang.fullName}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation - DVH + Menu + Language */}
        <div className="md:hidden flex items-center gap-3 bg-white/90 dark:bg-black/90 backdrop-blur-xl px-5 py-3 rounded-full border-2 border-neutral-200 dark:border-neutral-800 shadow-xl">
          {/* DVH Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
            className="text-sm font-semibold text-black dark:text-white"
          >
            DVH
          </motion.button>
          
          <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-1.5 text-black dark:text-white"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-xs font-medium">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
          </motion.button>
          
          <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 text-black dark:text-white"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </motion.button>
            
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full mt-2 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 shadow-xl p-2 min-w-[120px] z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'nl' | 'fr' | 'en')
                        setShowLangMenu(false)
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors ${
                        language === lang.code
                          ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white font-medium'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/50'
                      }`}
                    >
                      {lang.fullName}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-3xl border-2 border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 w-[calc(100%-3rem)]"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                item.isExternal ? (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-4 py-3 text-base text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-xl transition-colors cursor-pointer"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-base text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-xl transition-colors"
                  >
                    {item.name}
                  </motion.button>
                )
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
