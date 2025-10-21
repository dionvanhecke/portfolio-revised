'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import './print.css'

const Resume = () => {
  const { t, language } = useLanguage()

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Bar - Hidden on print */}
      <div className="print:hidden sticky top-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            ← Terug naar portfolio
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="w-full max-w-[900px] mx-auto px-6 sm:px-12 py-12 print:py-0 print:px-0">
        <motion.div
          id="resume-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-900 print:bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 print:border-0 print:rounded-none shadow-lg dark:shadow-2xl print:shadow-none"
        >
          {/* Header with Photo */}
          <div className="flex items-start gap-8 mb-10 print:mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 print:bg-neutral-100 border-2 border-neutral-200 dark:border-neutral-700 print:border-neutral-300">
                {/* Placeholder voor foto - vervang /profile.jpg met je eigen foto */}
                <div className="w-full h-full flex items-center justify-center text-neutral-400 dark:text-neutral-600 print:text-neutral-400 text-xs text-center p-4">
                  Foto
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-semibold text-black dark:text-white print:text-black mb-2 tracking-tight">
                Dion Van Hecke
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 print:text-neutral-600 mb-4 font-light">
                Junior Full Stack Developer
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                <div>dionvh@icloud.com</div>
                <div>België</div>
                <div>github.com/dionvanhecke</div>
                <div>linkedin.com/in/dion-vanhecke-798391232</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-medium text-black dark:text-white print:text-black mb-3 border-b-2 border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-2">
              Profiel
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600 leading-relaxed">
              Gepassioneerde Junior Full Stack Developer met 9 jaar programmeerervaring sinds 14-jarige leeftijd. 
              Gespecialiseerd in moderne webtechnologieën zoals Next.js, React, TypeScript en Laravel. 
              Ervaring met het ontwikkelen van cross-platform applicaties, webplatformen en infrastructuur configuratie.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-medium text-black dark:text-white print:text-black mb-4 border-b-2 border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-2">
              Werkervaring
            </h2>
            
            <div className="space-y-6">
              {/* Simcogroup */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white print:text-black">
                      Full Stack Developer
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                      Simcogroup
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500">
                    Sep 2024 - Heden
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  <li>Ontwikkeling van cross-platform mobile apps voor Android en iOS met Tauri en React</li>
                  <li>Configuratie van NGINX als webserver en reverse proxy</li>
                  <li>Implementatie van Cloudflare DNS voor optimale beveiliging</li>
                  <li>Bouwen van schaalbare webplatformen met Next.js, Laravel en NestJS</li>
                </ul>
              </div>

              {/* Techbirds */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white print:text-black">
                      Software Development Stagiair
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                      Techbirds
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500">
                    Apr 2024 - Mei 2024
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  <li>Ontwikkeling met C#, TypeScript en Next.js</li>
                  <li>Toepassing van scaffolding technieken</li>
                  <li>Implementatie van CI/CD processen</li>
                  <li>Ontwikkeling van soft skills en teamwerk</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-medium text-black dark:text-white print:text-black mb-4 border-b-2 border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-2">
              Opleiding
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white print:text-black">
                      Graduaat Programmeren
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                      Artevelde Hogeschool, Gent
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500">
                    2021 - 2024
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white print:text-black">
                      Kantoor
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                      Het Spectrum
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 print:text-neutral-500">
                    2014 - 2021
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  🏆 Stage-award ontvangen voor tool ontwikkeling
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-medium text-black dark:text-white print:text-black mb-4 border-b-2 border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-2">
              Technische Vaardigheden
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-black dark:text-white print:text-black mb-2">
                  Programmeertalen
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'PHP', 'C#', 'C++', 'SQL', 'HTML', 'CSS', 'SCSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-900 print:bg-neutral-100 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-black dark:text-white print:text-black mb-2">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'NestJS', 'Laravel', 'Tauri', 'Vue', 'Svelte', 'Remix'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-900 print:bg-neutral-100 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-black dark:text-white print:text-black mb-2">
                  DevOps & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['NGINX', 'Cloudflare', 'Git', 'CI/CD', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-900 print:bg-neutral-100 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-black dark:text-white print:text-black mb-2">
                  Talen
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Nederlands (Moedertaal)', 'Engels (Conversatie)', 'Frans (Conversatie)'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-900 print:bg-neutral-100 text-neutral-700 dark:text-neutral-300 print:text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Highlight */}
          <section className="mb-8 print:mb-6 print:break-inside-avoid">
            <h2 className="text-2xl font-medium text-black dark:text-white print:text-black mb-4 border-b-2 border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-2">
              Belangrijkste Projecten
            </h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-medium text-black dark:text-white print:text-black">
                  BizzInfra Website
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  Moderne website met Next.js, TypeScript en Tailwind CSS • Live: bizzinfra.be
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-black dark:text-white print:text-black">
                  Cross-Platform Mobile Apps
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  Android/iOS applicaties met Tauri en React voor Windows, macOS, iOS en Android
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-black dark:text-white print:text-black">
                  Web Platform Infrastructure
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600">
                  Schaalbare platforms met Next.js, Laravel, NestJS, NGINX en Cloudflare
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
