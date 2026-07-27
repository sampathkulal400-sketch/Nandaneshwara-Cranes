/* Fleet — each image used exactly once, mobile-first grid, no labels */

import { useLanguage } from '../LanguageContext'

const IMGS = [
  { src: '/images/crane1.jpg', alt: 'S.N Crane Service lifting' },
  { src: '/images/crane3.jpg', alt: 'S.N Crane fleet' },
  { src: '/images/crane4.jpg', alt: 'S.N Cranes lineup' },
  { src: '/images/crane5.jpg', alt: 'S.N Crane in Puttur' },
  { src: '/images/crane7.jpg', alt: 'S.N Crane on site' },
]

export default function Fleet() {
  const { t } = useLanguage()

  return (
    <section id="fleet" className="sp" style={{ background: '#07090e' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="reveal sec-label" style={{ margin: '0 auto 1rem' }}>{t('fleet_label')}</p>
          <h2 className="reveal d1 font-display" style={{
            color: '#fff', fontWeight: 900,
            fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            {t('fleet_title_1')}<br />
            <span className="gold-text">{t('fleet_title_2')}</span>
          </h2>
          <p className="reveal d2" style={{
            color: '#94a3b8', maxWidth: 500, margin: '0 auto', fontSize: '0.95rem',
            lineHeight: 1.6,
          }}>
            {t('fleet_desc')}
          </p>
        </div>

        {/* Crane Variations */}
        <div className="reveal d3" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem', marginBottom: '3rem',
        }}>
          {[
            { t: t('fleet_v1_title'), d: t('fleet_v1_desc'), c: '#f0a500' },
            { t: t('fleet_v2_title'), d: t('fleet_v2_desc'), c: '#25D366' },
            { t: t('fleet_v3_title'), d: t('fleet_v3_desc'), c: '#3b82f6' }
          ].map((v, i) => (
            <div key={i} style={{
              background: '#131720', border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 14, padding: '1.4rem', display: 'flex', alignItems: 'center', gap: '1rem'
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: `${v.c}15`, color: v.c,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: '0 0 0.2rem' }}>{v.t}</p>
                <p style={{ color: '#8b95a5', fontSize: '0.8rem', margin: 0, fontWeight: 500 }}>{v.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single column stacked full images */}
        <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {IMGS.map((img, i) => (
            <div key={img.src} className={`reveal d${(i % 3) + 1}`}
              style={{ borderRadius: 12, overflow: 'hidden', background: '#000' }}>
              <img src={img.src} alt={img.alt} loading={i > 1 ? 'lazy' : 'eager'} className="full-img" />
            </div>
          ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '0.7rem',
        }}>
          {IMGS.map((img, i) => {
            const isFull = i === 4;
            const isWide = i === 0 || i === 3;
            return (
              <div key={img.src} className={`reveal d${(i % 3) + 1}`}
                style={{
                  borderRadius: 12, overflow: 'hidden', background: '#000',
                  gridColumn: isFull ? 'span 3' : (isWide ? 'span 2' : 'span 1'),
                  aspectRatio: isFull ? '21/9' : (isWide ? '16/9' : '4/5'),
                  transition: 'transform .3s ease, box-shadow .3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.012)'
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="reveal d3" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #f0a500, #ffc840)',
            color: '#000', fontWeight: 800, padding: '12px 28px',
            borderRadius: 50, textDecoration: 'none', fontSize: '0.95rem',
            boxShadow: '0 8px 24px rgba(240,165,0,0.3)',
          }}>
            {t('book_crane')}
          </a>
        </div>
      </div>
    </section>
  )
}
