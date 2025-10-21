'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

interface ProjectMetadata {
  id: string
  title: {
    nl: string
    fr: string
    en: string
  }
  category: string
  company: string
  year: string
  status: {
    nl: string
    fr: string
    en: string
  }
  image: string
  technologies: string[]
  liveUrl?: string
}

interface Project {
  metadata: ProjectMetadata
  content: string
}

const ProjectDetail = () => {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}?lang=${language}`)
        if (response.ok) {
          const data = await response.json()
          setProject(data)
        }
      } catch (error) {
        console.error('Error fetching project:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProject()
    }
  }, [params.id, language])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-neutral-500 dark:text-neutral-400">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-black dark:text-white mb-4">Project niet gevonden</h1>
          <button
            onClick={() => router.push('/#projects')}
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          >
            Terug naar projecten
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/#projects')}
          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Terug naar projecten</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-8">
            <div className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
              {project.metadata.company} • {project.metadata.year}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black dark:text-white mb-6">
              {project.metadata.title[language]}
            </h1>
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <span className="px-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full">
                {project.metadata.status[language]}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-500">
                {project.metadata.category}
              </span>
              {project.metadata.liveUrl && (
                <a
                  href={project.metadata.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Bekijk live website</span>
                </a>
              )}
            </div>
          </div>

          {project.metadata.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
            >
              <Image
                src={project.metadata.image}
                alt={project.metadata.title[language]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-sm font-medium text-black dark:text-white mb-4">Technologieën</h3>
            <div className="flex flex-wrap gap-2">
              {project.metadata.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-neutral dark:prose-invert max-w-none"
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-medium text-black dark:text-white mb-6 mt-12">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-medium text-black dark:text-white mb-4 mt-10">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium text-black dark:text-white mb-3 mt-8">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 font-light">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-6">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-base text-neutral-600 dark:text-neutral-400 flex items-start leading-relaxed font-light">
                    <span className="text-neutral-400 dark:text-neutral-600 mr-3 mt-1">•</span>
                    <span>{children}</span>
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-medium text-black dark:text-white">
                    {children}
                  </strong>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2 mb-6 list-decimal list-inside">
                    {children}
                  </ol>
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
