'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Simcogroup',
      period: 'September 2024 - Present',
      location: 'Belgium',
      type: 'Full-time',
      description: 'Developing cutting-edge applications and web platforms with modern technologies.',
      achievements: [
        'Developed cross-platform mobile apps for Android and iOS using Tauri and React',
        'Focused on user-friendly designs with clear typography and intuitive interfaces',
        'Configured NGINX as webserver for Laravel applications',
        'Implemented NGINX as reverse proxy for Next.js applications',
        'Set up Cloudflare as DNS provider for optimal security and performance',
        'Built scalable web platforms using Next.js, Laravel, and NestJS'
      ],
      technologies: ['Tauri', 'React', 'Next.js', 'Laravel', 'NestJS', 'NGINX', 'Cloudflare'],
      color: 'blue'
    },
    {
      title: 'Software Development Intern',
      company: 'Techbirds',
      period: 'April 2024 - May 2024',
      location: 'Belgium',
      type: 'Internship',
      description: 'Intensive internship focused on modern development practices and team collaboration.',
      achievements: [
        'Developed essential soft skills including communication and teamwork',
        'Built applications using C#, TypeScript, and Next.js',
        'Learned and applied scaffolding techniques for efficient code generation',
        'Implemented CI/CD processes to optimize development workflows',
        'Gained experience with modern development methodologies'
      ],
      technologies: ['C#', 'TypeScript', 'Next.js', 'CI/CD', 'Git'],
      color: 'green'
    },
    {
      title: 'Student - Graduaat Programmeren',
      company: 'Artevelde Hogeschool',
      period: '2021 - 2024',
      location: 'Ghent, Belgium',
      type: 'Education',
      description: 'Comprehensive programming education focusing on modern web development.',
      achievements: [
        'Graduated with strong foundation in programming principles',
        'Specialized in web development technologies',
        'Completed various projects using modern frameworks',
        'Developed problem-solving and analytical thinking skills'
      ],
      technologies: ['JavaScript', 'PHP', 'HTML/CSS', 'SQL', 'Git'],
      color: 'purple'
    },
    {
      title: 'Student - Kantoor',
      company: 'Het Spectrum',
      period: '2014 - 2021',
      location: 'Belgium',
      type: 'Education',
      description: 'Secondary education with focus on office administration and early programming exposure.',
      achievements: [
        'Received internship award for creating innovative tools',
        'Developed tools that helped fellow students during internships',
        'Recognized by industry professionals for exceptional work',
        'Early demonstration of programming aptitude and problem-solving skills'
      ],
      technologies: ['Early Programming', 'Office Tools', 'Problem Solving'],
      color: 'amber'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700',
      amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="experience" className="py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-8 select-none">
            {t.experience.title}
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white leading-[1.2] max-w-4xl">
            {t.experience.intro}
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-3 gap-6 md:gap-8 sticky bg-white dark:bg-black p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-neutral-200 dark:border-neutral-800"
              style={{
                top: `${60 + (experiences.length - 1 - index) * 40}px`,
                zIndex: index + 1,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                marginBottom: index === experiences.length - 1 ? '0' : '24px',
              }}
            >
              <div className="space-y-2">
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-light">{exp.period}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-500">{exp.type}</div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 font-light mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light">
                    {exp.location}
                  </p>
                </div>

                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-black dark:text-white mb-3">
                    {t.experience.achievements}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start leading-relaxed font-light"
                      >
                        <span className="text-neutral-400 dark:text-neutral-600 mr-3 mt-1">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
