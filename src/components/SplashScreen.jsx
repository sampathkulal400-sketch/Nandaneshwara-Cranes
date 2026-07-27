import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Prevent scrolling while splash is active
    document.body.style.overflow = 'hidden'
    
    // Start fade out after 2.4s
    const fadeTimer = setTimeout(() => {
      setFading(true)
      document.body.style.overflow = ''
    }, 2400)

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#07090e',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fading ? 0 : 1,
      visibility: fading ? 'hidden' : 'visible',
      transition: 'opacity 0.6s ease, visibility 0.6s ease',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Main Title - Premium Cinematic */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="font-display" style={{
            color: '#fff',
            fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
            fontWeight: 900, margin: 0, letterSpacing: '2px',
            textTransform: 'uppercase',
            animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
            textShadow: '0 4px 20px rgba(255,255,255,0.1)'
          }}>
            S.N <span style={{ color: '#f0a500', textShadow: '0 4px 30px rgba(240,165,0,0.4)' }}>CRANE</span>
          </h1>

          <h2 className="font-display" style={{
            color: '#fff', fontSize: 'clamp(1.5rem, 6vw, 3.2rem)',
            fontWeight: 800, margin: '-0.4rem 0 0 0', letterSpacing: '8px',
            textTransform: 'uppercase',
            animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '0.15s',
            opacity: 0,
            textShadow: '0 4px 20px rgba(255,255,255,0.1)'
          }}>
            SERVICE
          </h2>
        </div>

        {/* Location Badge - Premium Minimalist */}
        <div style={{
          background: 'linear-gradient(90deg, transparent, rgba(240,165,0,0.15), transparent)',
          padding: '6px 50px',
          borderTop: '1px solid rgba(240,165,0,0.4)',
          borderBottom: '1px solid rgba(240,165,0,0.4)',
          animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          animationDelay: '0.3s',
          opacity: 0
        }}>
          <p style={{
            color: '#f0a500', fontSize: 'clamp(0.85rem, 3.5vw, 1.2rem)',
            fontWeight: 700, margin: 0, letterSpacing: '14px',
            textTransform: 'uppercase',
            marginRight: '-14px' /* Compensate for last letter tracking */
          }}>
            PUTTUR
          </p>
        </div>
      </div>
    </div>
  )
}
