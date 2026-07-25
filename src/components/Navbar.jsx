import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About Us',   href: '#about'    },
  { label: 'Our Cranes', href: '#fleet'    },
  { label: 'Services',   href: '#services' },
  { label: 'Contact',    href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:50,
        height:62,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 1.25rem',
        background: scrolled ? 'rgba(7,9,14,.97)' : 'rgba(7,9,14,.55)',
        backdropFilter:'blur(16px)',
        borderBottom:'1px solid rgba(240,165,0,.1)',
        transition:'background .3s',
      }}>
        {/* Brand */}
        <a href="#home" onClick={() => setOpen(false)} style={{ textDecoration:'none' }}>
          <p className="font-display" style={{
            color:'#f0a500', fontWeight:900,
            fontSize:'clamp(.85rem,3.5vw,.98rem)',
            letterSpacing:'.01em', lineHeight:1.2,
          }}>Nandaneshwara Cranes</p>
          <p style={{ color:'#6b7585', fontSize:'.6rem', textTransform:'uppercase', letterSpacing:'.1em' }}>
            Puttur
          </p>
        </a>

        {/* Desktop nav */}
        <ul style={{ display:'flex', gap:'1.6rem', listStyle:'none', margin:0, padding:0 }}
          className="hidden md:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color:'#6b7585', textDecoration:'none', fontSize:'.85rem', fontWeight:500, transition:'color .2s' }}
                onMouseEnter={e=>e.target.style.color='#f0a500'}
                onMouseLeave={e=>e.target.style.color='#6b7585'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="tel:+917259871285" className="hidden md:block"
          style={{
            background:'linear-gradient(135deg,#f0a500,#ffc840)',
            color:'#000', fontWeight:700, fontSize:'.84rem',
            padding:'8px 20px', borderRadius:50,
            textDecoration:'none',
          }}>
          Call Now
        </a>

        {/* Hamburger */}
        <button onClick={()=>setOpen(o=>!o)} className="md:hidden"
          style={{ background:'none', border:'none', cursor:'pointer', padding:8, display:'flex', flexDirection:'column', gap:5 }}
          aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block', width:24, height:2,
              background:'#f0a500', borderRadius:2, transition:'all .3s',
              transform: open
                ? (i===0 ? 'rotate(45deg) translateY(7px)' : i===2 ? 'rotate(-45deg) translateY(-7px)' : 'none')
                : 'none',
              opacity: open && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position:'fixed', top:62, left:0, right:0, zIndex:49,
        background:'rgba(7,9,14,.98)',
        borderBottom:'1px solid rgba(240,165,0,.08)',
        padding: open ? '1.4rem 1.25rem 1.8rem' : '0 1.25rem',
        maxHeight: open ? 480 : 0,
        overflow:'hidden',
        transition:'max-height .35s ease, padding .35s ease',
      }}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
            style={{
              display:'block', color:'#d8dce8', textDecoration:'none',
              fontWeight:500, padding:'.9rem 0', fontSize:'.98rem',
              borderBottom:'1px solid rgba(255,255,255,.05)',
            }}>
            {l.label}
          </a>
        ))}
        <a href="tel:+917259871285" onClick={()=>setOpen(false)}
          style={{
            display:'block', textAlign:'center',
            marginTop:'1.2rem',
            background:'linear-gradient(135deg,#f0a500,#ffc840)',
            color:'#000', fontWeight:700, fontSize:'1rem',
            padding:'14px', borderRadius:50, textDecoration:'none',
          }}>
          📞 +91 72598 71285
        </a>
        <a href="https://wa.me/917259871285?text=Hello%2C%20I%20need%20crane%20service%20from%20Nandaneshwara%20Cranes%20Puttur"
          target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}
          style={{
            display:'block', textAlign:'center',
            marginTop:'.6rem',
            background:'#25D366',
            color:'#fff', fontWeight:700, fontSize:'1rem',
            padding:'14px', borderRadius:50, textDecoration:'none',
          }}>
          💬 WhatsApp Us
        </a>
      </div>
    </>
  )
}
