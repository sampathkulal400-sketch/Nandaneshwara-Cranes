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
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

            <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ color: '#6b7585', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.92rem', maxWidth: 600 }}>
                {t('about_p1')}
              </p>
              <p style={{ color: '#6b7585', lineHeight: 1.8, marginBottom: '2rem', fontSize: '.92rem', maxWidth: 600 }}>
                {t('about_p2')}
              </p>
            </div>

            <ul className="reveal d3" style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: 800
            }}>
              {POINTS.map(p => (
                <li key={p} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: '.9rem', color: '#d8dce8',
                  background: '#131720',
                  border: '1px solid rgba(255,255,255,.05)',
                  borderRadius: 10, padding: '.8rem 1.2rem',
                }}>
                  <span style={{
                    flexShrink: 0, width: 20, height: 20,
                    borderRadius: '50%', border: '1.5px solid #f0a500',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#f0a500', fontSize: '.6rem', fontWeight: 900,
                  }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
