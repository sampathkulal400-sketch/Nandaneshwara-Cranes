import { useState } from 'react'

const WA = 'https://wa.me/917259871285'

const inp = {
  width:'100%', background:'#07090e',
  border:'1.5px solid rgba(255,255,255,.08)',
  borderRadius:10, padding:'12px 14px',
  color:'#d8dce8', fontSize:'.9rem',
  fontFamily:'inherit', outline:'none',
  transition:'border-color .2s',
}

export default function Contact() {
  const [f, setF] = useState({ name:'', phone:'', service:'', msg:'' })
  const set = e => setF(p => ({ ...p, [e.target.name]: e.target.value }))

  const send = e => {
    e.preventDefault()
    const txt = encodeURIComponent(
      `Hello Nandaneshwara Cranes,\n\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service||'General Inquiry'}${f.msg?'\nMessage: '+f.msg:''}\n\nPlease call me back.`
    )
    window.open(`${WA}?text=${txt}`, '_blank')
  }

  const focus = e => e.target.style.borderColor = '#f0a500'
  const blur  = e => e.target.style.borderColor = 'rgba(255,255,255,.08)'

  const CARD = ({ icon, title, sub, href, green }) => (
    <a href={href||'#'} target={href?.includes('http')?'_blank':undefined}
      rel={href?.includes('http')?'noreferrer':undefined}
      style={{ textDecoration:'none' }}>
      <div style={{
        display:'flex', alignItems:'center', gap:14,
        background:'#131720',
        border:`1.5px solid ${green ? 'rgba(37,211,102,.12)' : 'rgba(240,165,0,.1)'}`,
        borderRadius:13, padding:'1rem 1.2rem',
        transition:'border-color .22s, box-shadow .22s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = green ? 'rgba(37,211,102,.45)' : 'rgba(240,165,0,.45)'
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = green ? 'rgba(37,211,102,.12)' : 'rgba(240,165,0,.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}>
        <div style={{
          width:44, height:44, borderRadius:11, flexShrink:0,
          background: green ? 'rgba(37,211,102,.1)' : 'rgba(240,165,0,.1)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'1.2rem',
        }}>{icon}</div>
        <div>
          <p style={{ color:'#fff', fontWeight:600, fontSize:'.92rem', marginBottom:2 }}>{title}</p>
          <p style={{ color:'#6b7585', fontSize:'.76rem' }}>{sub}</p>
        </div>
      </div>
    </a>
  )

  return (
    <section id="contact" className="sp" style={{ background:'#0d1018' }}>
      <div style={{ maxWidth:1080, margin:'0 auto' }}>

        <div className="reveal" style={{ marginBottom:'2.2rem' }}>
          <p className="sec-label">Contact</p>
          <h2 className="font-display" style={{
            color:'#fff', fontWeight:900, lineHeight:1.1,
            fontSize:'clamp(1.6rem, 5vw, 2.3rem)',
          }}>
            Get a <span className="gold-text">Free Quote</span>
          </h2>
          <div className="sec-divider" style={{ marginBottom:'.4rem' }} />
          <p style={{ color:'#6b7585', fontSize:'.88rem', lineHeight:1.7, maxWidth:480 }}>
            We only serve <strong style={{ color:'#f0a500' }}>Puttur and surrounding areas</strong>.
            Contact us to check availability and get a quote.
          </p>
        </div>

        <div style={{ display:'grid', gap:'1.5rem', gridTemplateColumns:'1fr' }}
          className="lg:grid-cols-2">

          {/* Left — contact info */}
          <div className="reveal" style={{ display:'flex', flexDirection:'column', gap:'.8rem' }}>
            <CARD icon="📞" title="+91 72598 71285" sub="Call us to book a crane" href="tel:+917259871285" />
            <CARD icon="💬" title="WhatsApp Chat" sub="Send WhatsApp message"
              href={`${WA}?text=Hello%2C%20I%20need%20crane%20service`} green />
            <CARD icon="📍" title="Puttur" sub="We serve Puttur and nearby places" />

            {/* Area note */}
            <div style={{
              background:'#131720',
              border:'1px solid rgba(240,165,0,.1)',
              borderRadius:12, padding:'1rem 1.2rem',
              marginTop:'.2rem',
            }}>
              <p style={{ color:'#d8dce8', fontWeight:600, fontSize:'.85rem', marginBottom:4 }}>Our Area</p>
              <p style={{ color:'#6b7585', fontSize:'.8rem', lineHeight:1.65 }}>
                We only work in Puttur and nearby places.
                Please call us to check if we can come to your place.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal d2" style={{
            background:'#131720',
            border:'1.5px solid rgba(240,165,0,.12)',
            borderRadius:16, padding:'1.6rem 1.4rem',
          }}>
            <h3 className="font-display" style={{ color:'#fff', fontWeight:800, fontSize:'1.1rem', marginBottom:4 }}>
              Send a Message
            </h3>
            <p style={{ color:'#6b7585', fontSize:'.8rem', marginBottom:'1.4rem' }}>
              Fill this form and we will call or WhatsApp you back.
            </p>

            <form onSubmit={send} style={{ display:'flex', flexDirection:'column', gap:'.85rem' }}>
              {[
                { name:'name',  label:'Your Name',    type:'text', ph:'Full name' },
                { name:'phone', label:'Phone Number',  type:'tel',  ph:'+91 XXXXX XXXXX' },
              ].map(fi => (
                <div key={fi.name}>
                  <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>{fi.label}</label>
                  <input name={fi.name} value={f[fi.name]} onChange={set} required
                    type={fi.type} placeholder={fi.ph}
                    style={inp} onFocus={focus} onBlur={blur} />
                </div>
              ))}
              <div>
                <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>What Work You Need</label>
                <select name="service" value={f.service} onChange={set}
                  style={{ ...inp, cursor:'pointer', colorScheme:'dark' }}>
                  <option value="">Select...</option>
                  <option>House &amp; Building Work</option>
                  <option>Heavy Lifting</option>
                  <option>Loading &amp; Unloading</option>
                  <option>Pick and Carry (Shifting)</option>
                  <option>Emergency Work</option>
                </select>
              </div>
              <div>
                <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>Message (optional)</label>
                <textarea name="msg" value={f.msg} onChange={set} rows={3}
                  placeholder="Tell us what you need..."
                  style={{ ...inp, resize:'vertical' }} onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit"
                style={{
                  width:'100%',
                  background:'linear-gradient(135deg,#f0a500,#ffc840)',
                  color:'#000', fontWeight:700, fontSize:'.92rem',
                  padding:'14px', borderRadius:50, border:'none',
                  cursor:'pointer', fontFamily:'inherit',
                  transition:'opacity .2s',
                }}
                onMouseEnter={e=>e.target.style.opacity='.88'}
                onMouseLeave={e=>e.target.style.opacity='1'}>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
