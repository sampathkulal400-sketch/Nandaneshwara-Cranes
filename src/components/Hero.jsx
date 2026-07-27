import { useState, useEffect } from 'react'

const SLIDES = [
  { src: '/images/crane1.jpg', alt: 'Nandaneshwara crane lifting heavy load' },
  { src: '/images/crane4.jpg', alt: 'Nandaneshwara cranes at Puttur' },
]

const WA = 'https://wa.me/917259871285?text=Hello%2C%20I%20need%20crane%20service%20from%20S.N%20Crane%20Service%20Puttur'

export default function Hero() {
  const [cur, setCur] = useState(0)

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
          <img src={s.src} alt={s.alt} style={{
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
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(240,165,0,0.15)', border: '1px solid rgba(240,165,0,0.3)',
            color: '#f0a500', padding: '6px 14px', borderRadius: 50,
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#f0a500', flexShrink: 0 }} />
            Puttur &amp; Nearby Areas
          </div>

          <h1 className="font-display" style={{
            color: '#fff', fontWeight: 900,
            fontSize: 'clamp(2rem, 9vw, 4rem)',
            lineHeight: 1.1, marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            S.N Crane<br />
            <span className="gold-text">Service</span>
          </h1>

          <p style={{
            color: '#e2e8f0', fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
            lineHeight: 1.7, marginBottom: '2rem', opacity: 0.9,
          }}>
            Crane service in Puttur. We have 7 cranes and more than 10 years of experience.
          </p>

          {/* Desktop CTAs */}
          <div className="hidden md:flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+917259871285" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #f0a500, #ffc840)', color: '#000',
              fontWeight: 700, fontSize: '0.95rem',
              padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(240,165,0,0.4)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'none'}>
              📞 Call Now
            </a>
            <a href={WA} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: 600, fontSize: '0.95rem',
              padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}>
              💬 WhatsApp Us
            </a>
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
