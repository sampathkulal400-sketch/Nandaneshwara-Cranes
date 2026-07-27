import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About Us',   href: '#about'    },
  { label: 'Our Cranes', href: '#fleet'    },
  { label: 'Services',   href: '#services' },
  { label: 'Contact',    href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Always solid dark — never transparent so hero never bleeds through
  const BG = 'rgba(10,12,16,0.98)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: BG,                              // CONSTANT solid dark background always
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0.75rem 1rem',                   // Smaller padding — compact navbar
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
          <p className="font-display gold-text" style={{
            margin: 0, fontWeight: 900, fontSize: '1.15rem', // Smaller logo text
            letterSpacing: '-0.01em', lineHeight: 1.1,
          }}>S.N Crane</p>
          <p style={{
            color: '#8b95a5', fontSize: '0.58rem',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            marginTop: 1,
          }}>
            Services
          </p>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '1.8rem', alignItems: 'center' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '0.88rem', fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#f0a500'}
            onMouseLeave={e => e.target.style.color = '#e2e8f0'}>
              {l.label}
            </a>
          ))}
          <a href="tel:+917259871285" style={{
            background: 'linear-gradient(135deg, #f0a500, #ffc840)',
            color: '#000', fontWeight: 700, padding: '9px 20px',
            borderRadius: 50, textDecoration: 'none', fontSize: '0.85rem',
            boxShadow: '0 4px 14px rgba(240,165,0,0.3)',
          }}>
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', color: '#e2e8f0',
          cursor: 'pointer', padding: '0.4rem',
          minHeight: 0,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown — always solid dark, never shows hero behind */}
      <div className="md:hidden" style={{
        background: 'rgba(10,12,16,0.99)',         // Solid — hero never bleeds through
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        maxHeight: open ? 320 : 0,
        borderBottom: open ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 1.25rem 0.75rem' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '0.95rem',                 // Smaller — was 1.1rem
              fontWeight: 600,
              padding: '0.7rem 0',                 // Tighter — was 1rem
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              minHeight: 0,
            }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+917259871285" style={{
            color: '#f0a500', textDecoration: 'none',
            fontSize: '0.95rem', fontWeight: 700,
            padding: '0.8rem 0 0.3rem',
            minHeight: 0,
          }}>
            📞 +91 72598 71285
          </a>
        </div>
      </div>
    </nav>
  )
}
