/* Fixed bottom bar — Call + WhatsApp — mobile only */
const WA = "https://wa.me/917259871285?text=Hello%2C%20I%20need%20crane%20service%20from%20Nandaneshwara%20Cranes%20Puttur"

export default function MobileCTA() {
  return (
    <div className="mob-bar">
      <a href="tel:+917259871285"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          background: 'linear-gradient(135deg,#f0a500,#ffc840)',
          color: '#000', fontWeight: 700, fontSize: '1rem',
          padding: '17px 8px',
          textDecoration: 'none',
          letterSpacing: '.01em',
          minHeight: 56,
        }}>
        📞 Call Now
      </a>

      <a href={WA} target="_blank" rel="noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          background: '#25D366',
          color: '#fff', fontWeight: 700, fontSize: '1rem',
          padding: '17px 8px',
          textDecoration: 'none',
          minHeight: 56,
        }}>
        💬 WhatsApp
      </a>
    </div>
  )
}
