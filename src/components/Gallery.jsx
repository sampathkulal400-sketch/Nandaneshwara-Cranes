/* Gallery — ALL 5 full images, no cropping, natural proportions */

const IMGS = [
  { src:'/images/crane1.jpg', alt:'Crane lifting cable drum' },
  { src:'/images/crane2.jpg', alt:'Crane on job site' },
  { src:'/images/crane3.jpg', alt:'Multiple cranes fleet' },
  { src:'/images/crane4.jpg', alt:'Crane fleet lineup' },
  { src:'/images/crane5.jpg', alt:'Crane at work in Puttur' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="sp" style={{ background:'#07090e' }}>
      <div style={{ maxWidth:1080, margin:'0 auto' }}>

        <div className="reveal" style={{ marginBottom:'2.2rem' }}>
          <p className="sec-label">Gallery</p>
          <h2 className="font-display" style={{
            color:'#fff', fontWeight:900, lineHeight:1.1,
            fontSize:'clamp(1.6rem, 5vw, 2.3rem)',
          }}>
            Our Cranes <span className="gold-text">in Action</span>
          </h2>
          <div className="sec-divider" />
        </div>

        {/* Simple masonry-like column layout */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.8rem' }}>
          {IMGS.map((img, i) => (
            <div key={img.src} className={`reveal d${(i%3)+1}`}
              style={{
                /* Flex basis: alternate between wider and narrower */
                flex: i === 0 ? '1 1 100%'
                    : i === 2 ? '1 1 100%'
                    : '1 1 calc(50% - .4rem)',
                borderRadius:14, overflow:'hidden',
                background:'#000',
                boxShadow:'0 8px 30px rgba(0,0,0,.45)',
                transition:'transform .35s ease, box-shadow .35s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.015)'
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,.45)'
              }}
            >
              {/* Full image — no crop, natural height */}
              <img src={img.src} alt={img.alt} loading="lazy" className="full-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
