import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import PageLoader from '@/components/PageLoader'
import { LanguageProvider } from '@/context/LanguageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <PageLoader />
      <main className="relative min-h-screen">
        <ScrollProgress />
        <Navigation />
        <div className="w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <BackToTop />
      </main>
    </LanguageProvider>
  )
}
