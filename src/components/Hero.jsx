import { useState, useEffect } from 'react'

const SLIDES = [
  { src: '/images/crane1.jpg', alt: 'Nandaneshwara crane lifting heavy load' },
  { src: '/images/crane4.jpg', alt: 'Nandaneshwara cranes at Puttur' },
]

const WA = 'https://wa.me/917259871285?text=Hello%2C%20I%20need%20crane%20service%20from%20Nandaneshwara%20Cranes%20Puttur'

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100svh',
      background: '#07090e',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 62,
    }}>

      {/* Full image — no crop */}
      <div style={{ width: '100%', position: 'relative', lineHeight: 0, background: '#000' }}>
        {SLIDES.map((s, i) => (
          <img key={s.src} src={s.src} alt={s.alt}
            style={{
              width: '100%', height: 'auto', display: 'block',
              opacity: i === cur ? 1 : 0,
              position: i === cur ? 'relative' : 'absolute',
              top: 0, left: 0,
              transition: 'opacity 1.1s ease-in-out',
            }}
          />
        ))}

        {/* Fade bottom into dark */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '35%',
          background: 'linear-gradient(to bottom, transparent, #07090e)',
          pointerEvents: 'none',
        }} />

        {/* Slide dots */}
        <div style={{
          position: 'absolute', bottom: '0.8rem', right: '1rem',
          display: 'flex', gap: 6, zIndex: 2,
        }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} aria-label={`Image ${i + 1}`}
              style={{
                border: 'none', cursor: 'pointer', borderRadius: 50, padding: 0,
                transition: 'all .3s',
                width: i === cur ? 20 : 6, height: 6,
                background: i === cur ? '#f0a500' : 'rgba(255,255,255,.4)',
              }} />
          ))}
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: '2rem 1.2rem 7.5rem', maxWidth: 640 }}
        className="md:pb-14 md:px-16 lg:px-24">

        {/* Badge */}
        <div className="afu" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(240,165,0,.1)', border: '1px solid rgba(240,165,0,.3)',
          color: '#f0a500', padding: '5px 13px', borderRadius: 50,
          fontSize: '.68rem', fontWeight: 700, letterSpacing: '.08em',
          textTransform: 'uppercase', marginBottom: '.9rem',
        }}>
          <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#f0a500', flexShrink: 0 }} />
          Puttur &amp; Nearby Areas
        </div>

        <h1 className="afu a1 font-display" style={{
          color: '#fff', fontWeight: 900,
          fontSize: 'clamp(1.9rem, 7vw, 3.5rem)',
          lineHeight: 1.08, marginBottom: '.7rem',
          letterSpacing: '-.01em',
        }}>
          Nandaneshwara<br />
          <span className="gold-text">Crane Services</span>
        </h1>

        <p className="afu a2" style={{
          color: '#6b7585', fontSize: 'clamp(.9rem, 3.5vw, 1rem)',
          lineHeight: 1.75, marginBottom: '1.6rem',
        }}>
          Crane service in Puttur.<br />
          We have 7 cranes and more than 10 years of experience.
        </p>

        {/* Desktop CTAs only */}
        <div className="afu a3 hidden md:flex" style={{ gap: '.8rem', flexWrap: 'wrap' }}>
          <a href={WA} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#25D366', color: '#fff',
            fontWeight: 700, fontSize: '.95rem',
            padding: '13px 28px', borderRadius: 50, textDecoration: 'none',
            minHeight: 48,
          }}>
            WhatsApp Us
          </a>
          <a href="tel:+917259871285" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,.07)', border: '1.5px solid rgba(255,255,255,.15)',
            color: '#fff', fontWeight: 600, fontSize: '.95rem',
            padding: '13px 28px', borderRadius: 50, textDecoration: 'none',
            minHeight: 48,
          }}>
            +91 72598 71285
          </a>
        </div>
      </div>
    </section>
  )
}
