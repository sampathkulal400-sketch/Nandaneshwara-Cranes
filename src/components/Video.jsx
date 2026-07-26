import { useEffect, useRef } from 'react'

export default function Video() {
  const videoRef = useRef(null)

  useEffect(() => {
    // Automatically pause video if user scrolls away
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.2 } // Pause when less than 20% is visible
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="video" style={{ background: '#0a0c10', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>

      {/* Header */}
      <div className="reveal" style={{ padding: '0 1.25rem', maxWidth: 900, margin: '0 auto 1.8rem' }}>
        <p className="sec-label" style={{ textAlign: 'center' }}>Watch Our Equipment</p>
        <h2 className="font-display" style={{
          color: '#fff', fontWeight: 900, lineHeight: 1.1,
          fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', marginBottom: 0,
          textAlign: 'center'
        }}>
          See Our <span className="gold-text">Cranes at Work</span>
        </h2>
      </div>

      {/* Video wrapper - Premium look */}
      <div className="reveal d1" style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem', // Slight padding on mobile so it doesn't touch the very edge
      }}>
        <div style={{
          maxWidth: 600, // Better size for portrait videos
          borderRadius: 20, // Nice rounded corners everywhere
          overflow: 'hidden',
          border: '1px solid rgba(240,165,0,0.25)', // Gold border
          boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 20px rgba(240,165,0,0.1)', // Premium glow
          lineHeight: 0,
          display: 'inline-flex', // Shrinks exactly to the video size so there are NO black bars
          background: 'transparent',
        }}>
          <video
            ref={videoRef}
            src="/crane-video.mp4"
            controls
            controlsList="nodownload noplaybackrate" // Disables download and playback speed options
            disablePictureInPicture // Disables picture in picture option
            onContextMenu={(e) => e.preventDefault()} // Disables right-click to download
            playsInline
            preload="metadata"
            style={{
              maxHeight: '72vh', // Fits perfectly on screen without scrolling
              maxWidth: '100%',
              width: 'auto', // Lets the video dictate the width naturally
              height: 'auto',
              display: 'block',
              borderRadius: 20,
            }}
          >
            Your browser does not support video.
          </video>
        </div>
      </div>

      {/* Caption */}
      <p className="reveal d2" style={{
        color: '#8b95a5', fontSize: '.85rem',
        textAlign: 'center', marginTop: '1.2rem',
        padding: '0 1.25rem', lineHeight: 1.6,
        fontWeight: 500
      }}>
        Nandaneshwara Cranes — Serving Puttur &amp; nearby areas
      </p>

    </section>
  )
}
