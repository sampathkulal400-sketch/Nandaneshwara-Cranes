import { useLanguage } from '../LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const SERVICES = [
    {
      title: t('s1_t'),
      desc: t('s1_d'),
    },
    {
      title: t('s2_t'),
      desc: t('s2_d'),
    },
    {
      title: t('s3_t'),
      desc: t('s3_d'),
    },
    {
      title: t('s4_t'),
      desc: t('s4_d'),
    },
    {
      title: t('s5_t'),
      desc: t('s5_d'),
    },
  ]

  return (
    <section id="services" className="sp" style={{ background: '#0d1018' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="sec-label" style={{ margin: '0 auto 1rem' }}>{t('serv_label')}</p>
          <h2 className="font-display" style={{
            color: '#fff', fontWeight: 900,
            fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            {t('serv_title_1')}<span className="gold-text">{t('serv_title_2')}</span>
          </h2>
          <p style={{
            color: '#6b7585', maxWidth: 500, margin: '0 auto', fontSize: '0.92rem',
            lineHeight: 1.6,
          }}>
            {t('serv_desc')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '.9rem',
        }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`reveal d${(i % 3) + 1}`}
              style={{
                background: '#131720',
                border: '1px solid rgba(240,165,0,.1)',
                borderRadius: 14, padding: '1.3rem',
                cursor: 'default',
                transition: 'transform .28s ease, border-color .28s ease, box-shadow .28s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(240,165,0,.35)'
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(240,165,0,.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 30, height: 3,
                background: 'linear-gradient(90deg,#f0a500,#ffc840)',
                borderRadius: 2, marginBottom: '1rem',
              }} />
              <h3 className="font-display" style={{
                color: '#fff', fontWeight: 700,
                fontSize: '1rem', marginBottom: 6,
              }}>{s.title}</h3>
              <p style={{ color: '#6b7585', fontSize: '.85rem', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
