const SERVICES = [
  {
    title: 'House & Building Work',
    desc: 'We bring the crane to your site for house construction, building work, and any other construction.',
  },
  {
    title: 'Heavy Lifting',
    desc: 'Need to lift heavy items? We can lift big machines, heavy materials, and other big items safely.',
  },
  {
    title: 'Loading & Unloading',
    desc: 'We help you to load and unload heavy goods at your site or factory.',
  },
  {
    title: 'Pick and Carry (Shifting)',
    desc: 'We pick up heavy items from one place and shift them to another place.',
  },
  {
    title: 'Emergency Work',
    desc: 'If you need a crane urgently, just call us. We will try to come as fast as we can.',
  },
]

export default function Services() {
  return (
    <section id="services" className="sp" style={{ background: '#0d1018' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <p className="sec-label">What We Do</p>
          <h2 className="font-display" style={{
            color: '#fff', fontWeight: 900, lineHeight: 1.1,
            fontSize: 'clamp(1.7rem, 6vw, 2.4rem)',
          }}>
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="sec-divider" style={{ marginBottom: '.4rem' }} />
          <p style={{ color: '#6b7585', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 480 }}>
            We work only in Puttur and nearby areas.
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
