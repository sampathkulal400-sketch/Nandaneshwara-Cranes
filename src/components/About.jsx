import { useLanguage } from '../LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const POINTS = [
    t('point_1'),
    t('point_2'),
    t('point_3'),
    t('point_4'),
  ]

  const STATS = [
    { num: '7',   label: t('stat_cranes') },
    { num: '10+', label: t('stat_years') },
  ]

  return (
    <section id="about" className="sp" style={{ background: '#0d1018', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr' }} className="md:grid-cols-2 items-center">
          
          {/* Left: Text Content */}
          <div>
            <p className="reveal sec-label">{t('about_label')}</p>

            <h2 className="reveal d1 font-display" style={{
              color: '#fff', fontWeight: 900, lineHeight: 1.1,
              fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', marginBottom: 0,
            }}>
              {t('about_title_1')}<br />
              <span className="gold-text">{t('about_title_2')}</span>
            </h2>
            <div className="reveal d1 sec-divider" />

            {/* Stat pills */}
            <div className="reveal d2" style={{
              display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginBottom: '1.4rem',
            }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background: 'rgba(240,165,0,.08)',
                  border: '1px solid rgba(240,165,0,.22)',
                  borderRadius: 12, padding: '.85rem 1.2rem',
                  flex: '1 1 110px',
                }}>
                  <p className="font-display" style={{
                    color: '#f0a500', fontWeight: 900,
                    fontSize: 'clamp(1.7rem, 5vw, 2.1rem)', lineHeight: 1,
                  }}>{s.num}</p>
                  <p style={{ color: '#6b7585', fontSize: '.78rem', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="reveal d2">
              <p style={{ color: '#6b7585', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.92rem' }}>
                {t('about_p1')}
              </p>
              <p style={{ color: '#6b7585', lineHeight: 1.8, marginBottom: '1.4rem', fontSize: '.92rem' }}>
                {t('about_p2')}
              </p>
            </div>

            <ul className="reveal d3" style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: '.6rem',
            }}>
              {POINTS.map(p => (
                <li key={p} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  fontSize: '.9rem', color: '#d8dce8',
                  background: '#131720',
                  border: '1px solid rgba(255,255,255,.05)',
                  borderRadius: 10, padding: '.8rem 1rem',
                }}>
                  <span style={{
                    flexShrink: 0, width: 20, height: 20, marginTop: 1,
                    borderRadius: '50%', border: '1.5px solid #f0a500',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#f0a500', fontSize: '.6rem', fontWeight: 900,
                  }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="reveal d2 hidden md:block" style={{ position: 'relative', height: '100%' }}>
            <div style={{
              position: 'relative', borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.05)',
              height: '100%', minHeight: 500
            }}>
              <img src="/images/crane5.jpg" alt="S.N Crane Service team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,16,0.8), transparent 40%)' }} />
            </div>
            
            {/* Floating Badge */}
            <div className="glass-card" style={{
              position: 'absolute', bottom: -20, left: -20,
              padding: '1.2rem 1.5rem', borderRadius: 16,
              display: 'flex', alignItems: 'center', gap: 14,
              border: '1px solid rgba(240,165,0,.25)'
            }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(240,165,0,.15)', color: '#f0a500', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🏆</div>
              <div>
                <p className="font-display" style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', margin: 0 }}>{t('trusted_badge')}</p>
                <p style={{ color: '#8b95a5', fontSize: '0.8rem', margin: 0, fontWeight: 500 }}>{t('trusted_sub')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
