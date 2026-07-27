import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Fleet from './components/Fleet'
import Video from './components/Video'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import AIChatbot from './components/AIChatbot'
import ContactModal from './components/ContactModal'
import SplashScreen from './components/SplashScreen'
import { LanguageProvider } from './LanguageContext'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <div style={{ background: '#07090e', color: '#d8dce8', overflowX: 'hidden' }}>
        <SplashScreen />
        <Navbar />
        <Hero />
        <About />
        <Fleet />
        <Video />
        <Services />
        <Contact />
        <Footer />
        <AIChatbot />
        <MobileCTA />
        <ContactModal />
      </div>
    </LanguageProvider>
  )
}
