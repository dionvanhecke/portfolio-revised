'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

const ModernResume = () => {
  const { t } = useLanguage()

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-black dark:via-neutral-950 dark:to-neutral-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none print:hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="print:hidden sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            ← {t.resume.backToPortfolio}
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-2.5 bg-gradient-to-r from-black to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-black rounded-xl hover:shadow-lg transition-all text-sm font-medium"
          >
            {t.resume.downloadPDF}
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-16 print:py-0 print:px-0">
        <motion.div
          id="resume-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl print:bg-white print:backdrop-blur-none rounded-3xl print:rounded-none overflow-hidden shadow-2xl print:shadow-none border border-neutral-200/50 dark:border-neutral-800/50 print:border-0"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black dark:from-neutral-950 dark:via-black dark:to-neutral-900 print:from-neutral-900 print:via-neutral-800 print:to-black" />
            
            <div className="absolute inset-0 opacity-10 print:opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="relative p-12 md:p-16 print:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-40 h-40 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
                      <Image src="/avatar.jpg" alt="Dion Van Hecke" width={160} height={160} />
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 text-white">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                      Dion Van Hecke
                    </h1>
                    <p className="text-2xl text-white/80 mb-6 font-light">
                      Junior Full Stack Developer
                    </p>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-white/70">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        dionvh@icloud.com
                      </span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        België
                      </span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        github.com/dionvanhecke
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-16 print:p-12 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-black dark:text-white print:text-black mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 print:from-black print:to-neutral-600 rounded-full" />
                  {t.resume.profile}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 print:text-neutral-700 leading-relaxed text-lg">
                  {t.resume.profileText}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-black dark:text-white print:text-black mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 print:from-black print:to-neutral-600 rounded-full" />
                  {t.resume.workExperience}
                </h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700 print:border-neutral-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black dark:bg-white print:bg-black border-4 border-white dark:border-neutral-900 print:border-white" />
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white print:text-black">
                          {t.resume.job1Title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600 font-medium">
                          {t.resume.job1Company}
                        </p>
                      </div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500 font-medium">
                        {t.resume.job1Period}
                      </span>
                    </div>
                    <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job1Task1}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job1Task2}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job1Task3}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job1Task4}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700 print:border-neutral-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-400 dark:bg-neutral-600 print:bg-neutral-400 border-4 border-white dark:border-neutral-900 print:border-white" />
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white print:text-black">
                          {t.resume.job2Title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600 font-medium">
                          {t.resume.job2Company}
                        </p>
                      </div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500 font-medium">
                        {t.resume.job2Period}
                      </span>
                    </div>
                    <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job2Task1}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1.5">→</span>
                        <span>{t.resume.job2Task2}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-black dark:text-white print:text-black mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 print:from-black print:to-neutral-600 rounded-full" />
                  {t.resume.projects}
                </h2>
                
                <div className="grid gap-4">
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-800/50 print:bg-neutral-50 rounded-2xl border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                    <h3 className="font-semibold text-black dark:text-white print:text-black mb-1">{t.resume.project1Title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">{t.resume.project1Tech}</p>
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-800/50 print:bg-neutral-50 rounded-2xl border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                    <h3 className="font-semibold text-black dark:text-white print:text-black mb-1">{t.resume.project2Title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">{t.resume.project2Tech}</p>
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-800/50 print:bg-neutral-50 rounded-2xl border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                    <h3 className="font-semibold text-black dark:text-white print:text-black mb-1">{t.resume.project3Title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">{t.resume.project3Tech}</p>
                  </div>
                </div>
              </motion.section>
            </div>

            <div className="space-y-10">
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-xl font-bold text-black dark:text-white print:text-black mb-4">
                  {t.resume.education}
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-black dark:text-white print:text-black">{t.resume.edu1Title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">{t.resume.edu1School}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 print:text-neutral-500 mt-1">{t.resume.edu1Period}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white print:text-black">{t.resume.edu2Title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">{t.resume.edu2School}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 print:text-neutral-500 mt-1">{t.resume.edu2Period}</p>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 print:text-neutral-700 mt-2">{t.resume.edu2Award}</p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-xl font-bold text-black dark:text-white print:text-black mb-4">
                  {t.resume.skills}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 print:text-neutral-700 mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'JavaScript', 'PHP', 'C#', 'SQL'].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 print:bg-black/5 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 print:text-neutral-700 mb-2">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'React', 'Laravel', 'NestJS', 'Tauri'].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 print:bg-black/5 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 print:text-neutral-700 mb-2">DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {['NGINX', 'Cloudflare', 'Git', 'CI/CD'].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 print:bg-black/5 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-700 print:border-neutral-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-xl font-bold text-black dark:text-white print:text-black mb-4">
                  {t.resume.languages}
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 print:text-neutral-700">{t.resume.dutch}</span>
                    <span className="text-neutral-500 dark:text-neutral-500 print:text-neutral-500">{t.resume.native}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 print:text-neutral-700">{t.resume.english}</span>
                    <span className="text-neutral-500 dark:text-neutral-500 print:text-neutral-500">{t.resume.conversational}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 print:text-neutral-700">{t.resume.french}</span>
                    <span className="text-neutral-500 dark:text-neutral-500 print:text-neutral-500">{t.resume.conversational}</span>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ModernResume