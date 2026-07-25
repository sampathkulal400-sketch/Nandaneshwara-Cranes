/* Floating WhatsApp button — desktop only (mobile uses bottom bar) */
const WA = "https://wa.me/917259871285?text=Hello%2C%20I%20need%20crane%20service%20from%20Nandaneshwara%20Cranes%20Puttur"

export default function WaFab() {
  return (
    <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="wa-pulse hidden md:flex"
      style={{
        position:'fixed', bottom:'2rem', right:'2rem', zIndex:55,
        width:60, height:60, borderRadius:'50%',
        background:'#25D366',
        alignItems:'center', justifyContent:'center',
        textDecoration:'none',
        transition:'transform .2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform='scale(1.12)'}
      onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}>
      <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.526 5.855L.057 23.177a.75.75 0 00.918.919l5.344-1.47A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.666-.495-5.21-1.362l-.373-.217-3.872 1.065 1.064-3.872-.217-.373A9.971 9.971 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  )
}
