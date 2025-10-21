'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-9xl font-bold text-black dark:text-white mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:opacity-90 transition-opacity font-medium"
          >
            <Home className="w-5 h-5" />
            Terug naar home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Ga terug
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
            Misschien zoek je een van deze pagina's:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#about"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline"
            >
              Over mij
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline"
            >
              Projecten
            </Link>
            <Link
              href="/resume"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
