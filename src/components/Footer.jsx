export default function Footer() {
  return (
    <footer style={{
      background:'#060810',
      borderTop:'1px solid rgba(240,165,0,.08)',
      padding:'2rem 1.4rem 7rem',     /* 7rem clears mobile CTA bar */
    }}
    className="md:pb-10">
      <div style={{
        maxWidth:1080, margin:'0 auto',
        display:'flex', flexWrap:'wrap',
        alignItems:'center', justifyContent:'space-between',
        gap:'1.2rem',
      }}>
        <div>
          <p className="font-display" style={{ color:'#f0a500', fontWeight:900, fontSize:'.98rem', marginBottom:4 }}>
            S.N Crane Services
          </p>
          <p style={{ color:'#6b7585', fontSize:'.72rem', textTransform:'uppercase', letterSpacing:'.08em' }}>
            Puttur
          </p>
        </div>

        <nav style={{ display:'flex', flexWrap:'wrap', gap:'1.2rem' }}>
          {[['#about','About'],['#fleet','Cranes'],['#services','Services'],['#contact','Contact']].map(([h,l]) => (
            <a key={h} href={h}
              style={{ color:'#6b7585', textDecoration:'none', fontSize:'.8rem', transition:'color .2s' }}
              onMouseEnter={e=>e.target.style.color='#f0a500'}
              onMouseLeave={e=>e.target.style.color='#6b7585'}>
              {l}
            </a>
          ))}
        </nav>

        <div style={{ textAlign: 'center', width: '100%', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
          <p style={{ color:'#6b7585', fontSize:'.72rem' }}>
            © {new Date().getFullYear()} S.N Crane Services Puttur
          </p>
          <p style={{ color:'#6b7585', fontSize:'.72rem', marginTop: 4 }}>
            Built by <a href="https://optqvo.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#f0a500', textDecoration: 'none', fontWeight: 600 }}>Optqvo</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
