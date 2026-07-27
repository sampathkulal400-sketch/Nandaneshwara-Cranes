export default function WaFab() {
  return (
    <button onClick={() => window.dispatchEvent(new Event('openContactModal'))}
       className="wa-pulse"
       style={{
         position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
         width: 60, height: 60, borderRadius: '50%', border: 'none',
         background: 'linear-gradient(135deg, #f0a500, #ffc840)', color: '#000',
         display: 'flex', alignItems: 'center', justifyContent: 'center',
         boxShadow: '0 8px 24px rgba(240,165,0,.4)', cursor: 'pointer',
         transition: 'transform .2s',
       }}
       onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
       onMouseLeave={e => e.currentTarget.style.transform = 'none'}
       aria-label="Contact Us"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </button>
  )
}
