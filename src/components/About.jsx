const POINTS = [
  'Our drivers and crane operators have good experience',
  'All our cranes are in good condition',
  'Call us anytime — we will reply fast',
  'We tell you the exact price first — no hidden charges',
]

const STATS = [
  { num: '7',   label: 'Cranes' },
  { num: '10+', label: 'Years of Work' },
]

export default function About() {
  return (
    <section id="about" className="sp" style={{ background: '#0d1018' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <p className="reveal sec-label">About Us</p>

        <h2 className="reveal d1 font-display" style={{
          color: '#fff', fontWeight: 900, lineHeight: 1.1,
          fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', marginBottom: 0,
        }}>
          Local Crane Service<br />
          <span className="gold-text">You Can Trust</span>
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
            Nandaneshwara Cranes has been working in Puttur for more than
            <strong style={{ color: '#d8dce8' }}> 10 years</strong>. We have
            <strong style={{ color: '#d8dce8' }}> 7 cranes</strong> and a good team
            who know the area and the work well.
          </p>
          <p style={{ color: '#6b7585', lineHeight: 1.8, marginBottom: '1.4rem', fontSize: '.92rem' }}>
            We are a local business from Puttur. We work only in Puttur and nearby
            areas. Small job or big job — we give the same care and attention to every
            customer.
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
    </section>
  )
}
