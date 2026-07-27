import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const LINKS = [
    { label: t('nav_about'),   href: '#about'    },
    { label: t('nav_fleet'),   href: '#fleet'    },
    { label: t('nav_services'),href: '#services' },
    { label: t('nav_contact'), href: '#contact'  },
  ]

  // 100% solid background for max compatibility on all phones
  const BG = '#0a0c10' 

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: BG,                              
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      // Removed backdrop-filter to ensure it works properly on EVERY mobile phone
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0.6rem 1rem',                   // Even smaller padding for compact look
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
          <p className="font-display gold-text" style={{
            margin: 0, fontWeight: 900, fontSize: '1.1rem', // Smaller logo text
            letterSpacing: '-0.01em', lineHeight: 1.1,
          }}>S.N Crane</p>
          <p style={{
            color: '#8b95a5', fontSize: '0.55rem',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            marginTop: 1,
          }}>
            Service
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
          <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} style={{
            background: 'linear-gradient(135deg, #f0a500, #ffc840)',
            color: '#000', fontWeight: 700, padding: '8px 18px', border: 'none',
            borderRadius: 50, textDecoration: 'none', fontSize: '0.85rem', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(240,165,0,0.3)',
          }}>
            {t('call_now')}
          </button>
          <button 
            onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
            style={{ 
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', padding: '4px 8px', borderRadius: 6, cursor: 'pointer',
              fontSize: '0.75rem', fontWeight: 'bold'
            }}
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'ENG'}
          </button>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
            style={{ 
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', padding: '4px 8px', borderRadius: 4, cursor: 'pointer',
              fontSize: '0.7rem', fontWeight: 'bold'
            }}
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'ENG'}
          </button>
          <button onClick={() => setOpen(!open)} style={{
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
      </div>

      {/* Mobile Menu Dropdown — 100% solid hex color */}
      <div className="md:hidden" style={{
        background: '#0a0c10',         
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        maxHeight: open ? 240 : 0,
        borderBottom: open ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1.25rem 0.5rem' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '0.9rem',                 // Made text smaller as requested
              fontWeight: 600,
              padding: '0.65rem 0',                 
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              minHeight: 0,
            }}>
              {l.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  )
}
