import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

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
  const { t } = useLanguage()
  const [f, setF] = useState({ name:'', phone:'', service:'', msg:'' })
  const set = e => setF(p => ({ ...p, [e.target.name]: e.target.value }))

  const send = e => {
    e.preventDefault()
    const txt = encodeURIComponent(
      `Hello S.N Crane Service,\n\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service||'General Inquiry'}${f.msg?'\nMessage: '+f.msg:''}\n\nPlease call me back.`
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
          <p className="sec-label">{t('contact_label')}</p>
          <h2 className="font-display" style={{
            color:'#fff', fontWeight:900, lineHeight:1.1,
            fontSize:'clamp(1.6rem, 5vw, 2.3rem)',
          }}>
            {t('contact_title_1')}<span className="gold-text">{t('contact_title_2')}</span>
          </h2>
          <div className="sec-divider" style={{ marginBottom:'.4rem' }} />
          <p style={{ color:'#6b7585', fontSize:'.88rem', lineHeight:1.7, maxWidth:480 }}>
            {t('contact_desc')}
          </p>
        </div>

        <div style={{ display:'grid', gap:'1.5rem', gridTemplateColumns:'1fr' }}
          className="lg:grid-cols-2">

          {/* Left — contact info */}
          <div className="reveal" style={{ display:'flex', flexDirection:'column', gap:'.8rem' }}>
            {/* Premium Multiple Owners Phone List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>{t('call_whatsapp')}</h3>
              <p style={{ color: '#6b7585', fontSize: '.8rem', marginBottom: '0.4rem' }}>{t('tap_icon')}</p>
              
              {[
                { num: '72598 71285', tag: 'Owner', val: '7259871285' },
                { num: '95350 19402', tag: 'Owner', val: '9535019402' },
                { num: '94813 79134', tag: 'Owner', val: '9481379134' },
                { num: '99026 48298', tag: 'Owner', val: '9902648298' },
              ].map((owner, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 10px', background: '#131720',
                  borderRadius: 14, border: '1px solid rgba(240,165,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(240,165,0,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(240,165,0,0.1)' }}>
                  
                  {/* Left: Avatar & Number */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(240,165,0,0.08)', color: '#f0a500',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem'
                    }}>
                      👤
                    </div>
                    <div>
                      <p style={{ color: '#fff', fontSize: 'clamp(0.85rem, 4vw, 1rem)', fontWeight: 700, margin: 0, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                        +91 {owner.num}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 6 }}>
                    {/* Call Button */}
                    <a href={`tel:+91${owner.val}`} title="Call" style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(240,165,0,0.1)', color: '#f0a500',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(240,165,0,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(240,165,0,0.1)'}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </a>
                    
                    {/* WhatsApp Button */}
                    <a href={`https://wa.me/91${owner.val}?text=Hello%2C%20I%20need%20crane%20service`} target="_blank" rel="noreferrer" title="WhatsApp" style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(37,211,102,0.12)', color: '#25D366',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.12)'}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <CARD icon="📍" title="Puttur" sub="We serve Puttur and nearby places" />

            {/* Area note */}
            <div style={{
              background:'#131720',
              border:'1px solid rgba(240,165,0,.1)',
              borderRadius:12, padding:'1rem 1.2rem',
              marginTop:'.2rem',
            }}>
              <p style={{ color:'#d8dce8', fontWeight:600, fontSize:'.85rem', marginBottom:4 }}>{t('our_area')}</p>
              <p style={{ color:'#6b7585', fontSize:'.8rem', lineHeight:1.65 }}>
                {t('area_desc')}
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
              {t('send_msg')}
            </h3>
            <p style={{ color:'#6b7585', fontSize:'.8rem', marginBottom:'1.4rem' }}>
              {t('form_desc')}
            </p>

            <form onSubmit={send} style={{ display:'flex', flexDirection:'column', gap:'.85rem' }}>
              {[
                { name:'name',  label: t('lbl_name'),    type:'text', ph:'Full name' },
                { name:'phone', label: t('lbl_phone'),  type:'tel',  ph:'+91 XXXXX XXXXX' },
              ].map(fi => (
                <div key={fi.name}>
                  <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>{fi.label}</label>
                  <input name={fi.name} value={f[fi.name]} onChange={set} required
                    type={fi.type} placeholder={fi.ph}
                    style={inp} onFocus={focus} onBlur={blur} />
                </div>
              ))}
              <div>
                <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>{t('lbl_work')}</label>
                <select name="service" value={f.service} onChange={set}
                  style={{ ...inp, cursor:'pointer', colorScheme:'dark' }}>
                  <option value="">{t('opt_select')}</option>
                  <option>{t('s1_t')}</option>
                  <option>{t('s2_t')}</option>
                  <option>{t('s3_t')}</option>
                  <option>{t('s4_t')}</option>
                  <option>{t('s5_t')}</option>
                </select>
              </div>
              <div>
                <label style={{ display:'block', color:'#6b7585', fontSize:'.76rem', fontWeight:500, marginBottom:5 }}>{t('lbl_msg')}</label>
                <textarea name="msg" value={f.msg} onChange={set} rows={3}
                  placeholder="..."
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
                {t('btn_send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
