import { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

const SLIDES = [
  { src: '/images/crane1.jpg', alt: 'S.N Crane Service lifting' },
  { src: '/images/crane3.jpg', alt: 'S.N Crane fleet' },
  { src: '/images/crane4.jpg', alt: 'S.N Cranes at work' },
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centers vertically
      overflow: 'hidden',
      padding: '8rem 1.25rem 6rem', // Big top padding to clear fixed navbar
    }}>

      {/* ── Background Image Slider ── */}
      {SLIDES.map((s, i) => (
        <div key={s.src} style={{
          position: 'absolute', inset: 0,
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 1.4s ease-in-out',
          zIndex: 0,
        }}>
          <img src={s.src} alt={s.alt} className={i === cur ? 'ken-burns' : ''} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center',
          }} />
        </div>
      ))}

      {/* ── Gradient Overlay for text readability ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(10,12,16,0.95) 0%, rgba(10,12,16,0.7) 40%, rgba(10,12,16,0.3) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 1,
        background: 'linear-gradient(to top, rgba(10,12,16,1) 0%, transparent 100%)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1200, width: '100%', margin: '0 auto',
      }}>
        <div className="glass-card afu" style={{
          maxWidth: 580,
          padding: '2rem 1.5rem', borderRadius: 20,
        }}>
          {/* Badge */}
          <div className="reveal afu" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.06)', padding: '6px 14px',
            borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2rem',
          }}>
            <span style={{ color: '#25D366' }}>📍</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: '#e2e8f0' }}>
              {t('hero_badge')}
            </span>
          </div>

          <h1 className="font-display reveal afu a1" style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.05, margin: 0,
            color: '#fff', letterSpacing: '-0.02em',
          }}>
            {t('hero_title_1')}<br />
            <span className="gold-text">{t('hero_title_2')}</span>
          </h1>

          <p className="reveal afu a2" style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: '#d8dce8', marginTop: '1.5rem', marginBottom: '2.5rem',
            maxWidth: 500, lineHeight: 1.6, fontWeight: 400, opacity: 0.9,
          }}>
            {t('hero_desc')}
          </p>

          <div className="reveal afu a3" style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
          }}>
            <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} style={{
              background: 'linear-gradient(135deg, #f0a500, #ffc840)', border: 'none',
              color: '#000', fontWeight: 800, padding: '14px 32px', cursor: 'pointer',
              borderRadius: 50, textDecoration: 'none', fontSize: '1.05rem',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 8px 24px rgba(240,165,0,0.4)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {t('call_whatsapp')}
            </button>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', right: '1.5rem', zIndex: 10,
        display: 'flex', gap: 4,
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Image ${i + 1}`}
            style={{
              border: 'none', cursor: 'pointer', padding: '10px 4px',
              background: 'transparent',
              minHeight: 0, // override global mobile button min-height
            }}>
            <div style={{
              borderRadius: 50,
              transition: 'all 0.3s ease',
              width: i === cur ? 24 : 8, height: 8,
              background: i === cur ? '#f0a500' : 'rgba(255,255,255,0.4)',
            }} />
          </button>
        ))}
      </div>
    </section>
  )
}
