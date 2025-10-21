'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Globe, Code, Database, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

const Projects = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 'cross-platform-apps',
      title: t.projects.items.crossPlatform.title,
      category: 'mobile',
      description: t.projects.items.crossPlatform.description,
      image: '/parapluu.png',
      technologies: ['Tauri', 'React', 'TypeScript', 'Windows', 'macOS', 'iOS', 'Android'],
      features: t.projects.items.crossPlatform.features,
      company: 'Simcogroup',
      year: '2024',
      status: t.projects.items.crossPlatform.status,
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 'web-platform-infrastructure',
      title: t.projects.items.webPlatform.title,
      category: 'web',
      description: t.projects.items.webPlatform.description,
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Laravel', 'NestJS', 'NGINX', 'Cloudflare'],
      features: t.projects.items.webPlatform.features,
      company: 'Simcogroup',
      year: '2024',
      status: t.projects.items.webPlatform.status,
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'modern-web-applications',
      title: t.projects.items.modernWeb.title,
      category: 'web',
      description: t.projects.items.modernWeb.description,
      image: '/api/placeholder/600/400',
      technologies: ['C#', 'TypeScript', 'Next.js', 'CI/CD', 'Git'],
      features: t.projects.items.modernWeb.features,
      company: 'Techbirds',
      year: '2024',
      status: t.projects.items.modernWeb.status,
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 'student-tool-suite',
      title: t.projects.items.studentTools.title,
      category: 'tools',
      description: t.projects.items.studentTools.description,
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML/CSS', 'Problem Solving'],
      features: t.projects.items.studentTools.features,
      company: 'Het Spectrum',
      year: '2014-2021',
      status: t.projects.items.studentTools.status,
      icon: <Database className="w-6 h-6" />
    }
  ]

  const categories = [
    { id: 'all', name: t.projects.all, count: projects.length },
    { id: 'mobile', name: t.projects.mobile, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', name: t.projects.web, count: projects.filter(p => p.category === 'web').length },
    { id: 'tools', name: t.projects.tools, count: projects.filter(p => p.category === 'tools').length },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-8 select-none">
            {t.projects.title}
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white leading-[1.2] max-w-4xl">
            {t.projects.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 text-sm font-light transition-colors ${
                filter === category.id
                  ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                  : 'text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky"
              style={{
                top: `${60 + (filteredProjects.length - 1 - index) * 40}px`,
                zIndex: index + 1,
                marginBottom: index === filteredProjects.length - 1 ? '0' : '48px',
              }}
            >
              <Link href={`/projects/${project.id}`}>
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-black p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-neutral-200 dark:border-neutral-800 cursor-pointer group"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                  <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                    {project.company} • {project.year}
                  </div>
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-black dark:text-white mb-3">
                    {t.projects.features}
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start leading-relaxed font-light"
                      >
                        <span className="text-neutral-400 dark:text-neutral-600 mr-3 mt-1">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md font-light"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  </div>
                  </div>

                  <div className="hidden md:flex aspect-video bg-neutral-900 dark:bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 items-center justify-center p-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <span>Bekijk project details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
