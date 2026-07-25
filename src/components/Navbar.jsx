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

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }} className={scrolled ? 'glass' : ''}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: scrolled ? '0.8rem 1.25rem' : '1.2rem 1.25rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'padding 0.3s ease',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
          <p className="font-display gold-text" style={{
            margin: 0, fontWeight: 900, fontSize: '1.4rem',
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>Nandaneshwara</p>
          <p style={{
            color: '#8b95a5', fontSize: '0.65rem',
            textTransform: 'uppercase', letterSpacing: '0.15em',
            marginTop: 2,
          }}>
            Crane Services
          </p>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#f0a500'}
            onMouseLeave={e => e.target.style.color = '#e2e8f0'}>
              {l.label}
            </a>
          ))}
          <a href="tel:+917259871285" style={{
            background: 'linear-gradient(135deg, #f0a500, #ffc840)',
            color: '#000', fontWeight: 700, padding: '10px 24px',
            borderRadius: 50, textDecoration: 'none', fontSize: '0.9rem',
            boxShadow: '0 4px 14px rgba(240,165,0,0.3)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'none'}>
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', color: '#e2e8f0',
          cursor: 'pointer', padding: '0.5rem',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="md:hidden glass" style={{
        position: 'absolute', top: '100%', left: 0, right: 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        maxHeight: open ? 400 : 0,
        borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.25rem' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '1.1rem', fontWeight: 600,
              padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+917259871285" style={{
            color: '#f0a500', textDecoration: 'none',
            fontSize: '1.1rem', fontWeight: 700,
            padding: '1.25rem 0 0.5rem',
          }}>
            📞 +91 72598 71285
          </a>
        </div>
      </div>
    </nav>
  )
}
