/* Fleet — each image used exactly once, mobile-first grid, no labels */

const IMGS = [
  { src: '/images/crane1.jpg', alt: 'Nandaneshwara crane at work' },
  { src: '/images/crane3.jpg', alt: 'Nandaneshwara crane fleet' },
  { src: '/images/crane4.jpg', alt: 'Nandaneshwara cranes lineup' },
  { src: '/images/crane5.jpg', alt: 'Nandaneshwara crane in Puttur' },
]

export default function Fleet() {
  return (
    <section id="fleet" className="sp" style={{ background: '#07090e' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '1.8rem' }}>
          <p className="sec-label">Our Cranes</p>
          <h2 className="font-display" style={{
            color: '#fff', fontWeight: 900, lineHeight: 1.1,
            fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', marginBottom: 0,
          }}>
            We Have 7 Cranes — <span className="gold-text">Ready for Work</span>
          </h2>
          <div className="sec-divider" style={{ marginBottom: '.4rem' }} />
          <p style={{ color: '#6b7585', fontSize: '.88rem', lineHeight: 1.7 }}>
            All our cranes work only in Puttur and nearby areas. Call us to check if we can come to your place.
          </p>
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
          {IMGS.map((img, i) => (
            <div key={img.src} className={`reveal d${(i % 3) + 1}`}
              style={{
                borderRadius: 12, overflow: 'hidden', background: '#000',
                gridColumn: i === 0 || i === 3 ? 'span 2' : 'span 1',
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
              <img src={img.src} alt={img.alt} loading="lazy" className="full-img" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal d2" style={{ marginTop: '1.6rem', textAlign: 'center' }}>
          <a href="tel:+917259871285" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,#f0a500,#ffc840)',
            color: '#000', fontWeight: 700, fontSize: '1rem',
            padding: '14px 36px', borderRadius: 50, textDecoration: 'none',
            minHeight: 48,
          }}>
          Call Us to Book a Crane
          </a>
        </div>

      </div>
    </section>
  )
}
