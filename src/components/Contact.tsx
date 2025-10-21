'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, MapPin, Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Hi Dion,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:dionvh@icloud.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t.contact.emailTitle,
      value: t.contact.emailValue,
      description: t.contact.emailDesc,
      action: () => window.location.href = 'mailto:dionvh@icloud.com'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: t.contact.githubTitle,
      value: t.contact.githubValue,
      description: t.contact.githubDesc,
      action: () => window.open('https://github.com/dionvanhecke', '_blank')
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: t.contact.linkedinTitle,
      value: t.contact.linkedinValue,
      description: t.contact.linkedinDesc,
      action: () => window.open('https://be.linkedin.com/in/dion-vanhecke-798391232', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t.contact.locationTitle,
      value: t.contact.locationValue,
      description: t.contact.locationDesc,
      action: null
    }
  ]

  return (
    <section id="contact" className="py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-sm tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-8 select-none">
            {t.contact.title}
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white leading-[1.2] max-w-4xl">
            {t.contact.intro}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                onClick={info.action || undefined}
                className={`group ${
                  info.action ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white bg-transparent text-black dark:text-white transition-colors outline-none font-light"
                    placeholder={t.contact.name + ' *'}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white bg-transparent text-black dark:text-white transition-colors outline-none font-light"
                    placeholder={t.contact.email + ' *'}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white bg-transparent text-black dark:text-white transition-colors outline-none font-light"
                    placeholder={t.contact.subject}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white bg-transparent text-black dark:text-white transition-colors outline-none resize-none font-light"
                    placeholder={t.contact.message + ' *'}
                  />
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  type="submit"
                  className="flex items-center gap-2 text-black dark:text-white font-medium mt-8"
                >
                  <span>{t.contact.send}</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light">
            © 2025 Dion Van Hecke
          </p>
          <div className="flex gap-6">
            <motion.a
              whileHover={{ opacity: 0.7 }}
              href="https://github.com/dionvanhecke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ opacity: 0.7 }}
              href="https://be.linkedin.com/in/dion-vanhecke-798391232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
