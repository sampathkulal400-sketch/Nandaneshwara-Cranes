export default function Video() {
  return (
    <section id="video" style={{ background: '#0a0c10', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>

      {/* Header */}
      <div className="reveal" style={{ padding: '0 1.25rem', maxWidth: 900, margin: '0 auto 1.4rem' }}>
        <p className="sec-label">Video</p>
        <h2 className="font-display" style={{
          color: '#fff', fontWeight: 900, lineHeight: 1.1,
          fontSize: 'clamp(1.6rem, 6vw, 2.4rem)', marginBottom: 0,
        }}>
          See Our <span className="gold-text">Cranes at Work</span>
        </h2>
        <div className="sec-divider" />
      </div>

      {/* Video wrapper
          - Mobile: full screen width
          - Desktop: centered, max 480px wide (for portrait/vertical videos)
            so no black bars on sides */}
      <div className="reveal d1" style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#000',
        lineHeight: 0,
      }}>
        <video
          src="/crane-video.mp4"
          controls
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            maxWidth: 520,      /* Limits width on desktop — removes black side bars */
            height: 'auto',    /* Natural height — no squishing */
            display: 'block',
          }}
        >
          Your browser does not support video.
        </video>
      </div>

      {/* Caption */}
      <p className="reveal d2" style={{
        color: '#6b7585', fontSize: '.82rem',
        textAlign: 'center', marginTop: '0.9rem',
        padding: '0 1.25rem', lineHeight: 1.6,
      }}>
        Nandaneshwara Cranes — Puttur &amp; nearby areas
      </p>

    </section>
  )
}
