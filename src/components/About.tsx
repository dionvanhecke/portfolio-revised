'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Code, Heart, Zap, Rocket, Palette } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skills = {
    languages: [
      'TypeScript', 'JavaScript', 'PHP', 'C++', 'C#', 'SQL', 'HTML', 'CSS', 'SCSS'
    ],
    frameworks: [
      'Next.js', 'React', 'NestJS', 'Remix', 'Svelte', 'Vue', 'CodeIgniter'
    ],
    tools: [
      'Git', 'Docker', 'NGINX', 'Cloudflare', 'Tauri', 'Laravel'
    ],
    languages_spoken: [
      { name: 'Dutch', level: 'Native' },
      { name: 'English', level: 'Conversational' },
      { name: 'French', level: 'Conversational' }
    ]
  }

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.about.highlight1Title,
      description: t.about.highlight1Desc
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t.about.highlight2Title,
      description: t.about.highlight2Desc
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t.about.highlight3Title,
      description: t.about.highlight3Desc
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t.about.highlight4Title,
      description: t.about.highlight4Desc
    }
  ]

  return (
    <section id="about" className="py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-8 select-none">
            {t.about.title}
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white leading-[1.2] max-w-4xl">
            {t.about.intro}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h3 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 select-none">
              {t.about.journey}
            </h3>
            <div className="space-y-6 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              <p dangerouslySetInnerHTML={{ __html: t.about.journeyText1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.journeyText2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.journeyText3 }} />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="space-y-3 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow"
                >
                  <div className="text-black dark:text-white">
                    {item.icon}
                  </div>
                  <h4 className="font-medium text-black dark:text-white text-sm">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <h3 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 select-none">
              {t.about.skills}
            </h3>

            <div>
              <h4 className="text-sm font-medium text-black dark:text-white mb-4">
                {t.about.languages}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md font-light"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-black dark:text-white mb-4">
                {t.about.frameworks}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md font-light"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-black dark:text-white mb-4">
                {t.about.tools}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md font-light"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-black dark:text-white mb-4">
                {t.about.spokenLanguages}
              </h4>
              <div className="space-y-3">
                {skills.languages_spoken.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-between items-center py-3 border-b border-neutral-200 dark:border-neutral-800"
                  >
                    <span className="text-sm text-black dark:text-white font-light">
                      {lang.name}
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
