import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

const KNOWLEDGE_BASE = [
  {
    keywords: ['price', 'prize', 'cost', 'charg', 'rate', 'amt', 'amont', 'amount', 'money', 'much', 'pay', 'rs', 'rupee', 'ಬೆಲೆ', 'ಖರ್ಚು', 'ಹಣ', 'ದರ', 'ರೇಟ್'],
    en: "Our pricing depends on the crane capacity and the hours required. We promise fair pricing with no hidden charges. Please tap 'Call Now' for a free exact quote!",
    kn: "ಬೆಲೆಯು ಕ್ರೇನ್ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಬೇಕಾಗುವ ಸಮಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ. ಉಚಿತ ದರ ಪಡೆಯಲು ದಯವಿಟ್ಟು 'ಈಗ ಕರೆ ಮಾಡಿ' ಬಟನ್ ಒತ್ತಿ!"
  },
  {
    keywords: ['area', 'puttur', 'far', 'distanc', 'where', 'locat', 'place', 'village', 'town', 'address', 'office', 'ಪ್ರದೇಶ', 'ಪುತ್ತೂರು', 'ದೂರ', 'ಎಲ್ಲಿ', 'ಸ್ಥಳ', 'ಊರು', 'ವಿಳಾಸ'],
    en: "We proudly serve Puttur, Sulya, Kadaba, Uppinangady, and all surrounding areas! Our office is based in Puttur. If your site is far, just call us to confirm.",
    kn: "ನಾವು ಪುತ್ತೂರು, ಸುಳ್ಯ, ಕಡಬ, ಉಪ್ಪಿನಂಗಡಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಿಗೆ ಸೇವೆ ನೀಡುತ್ತೇವೆ! ನಮ್ಮ ಕಛೇರಿ ಪುತ್ತೂರಿನಲ್ಲಿದೆ."
  },
  {
    keywords: ['night', 'time', '24', 'hour', 'emergenc', 'urgent', 'open', 'close', 'late', 'ರಾತ್ರಿ', 'ಸಮಯ', 'ಗಂಟೆ', 'ತುರ್ತು', 'ಯಾವಾಗ'],
    en: "We are available 24 hours a day, 7 days a week for any emergency work. Please call us directly for urgent night requirements.",
    kn: "ನಾವು ತುರ್ತು ಕೆಲಸಗಳಿಗಾಗಿ ದಿನದ 24 ಗಂಟೆ ಲಭ್ಯವಿದ್ದೇವೆ. ರಾತ್ರಿಯ ತುರ್ತು ಅಗತ್ಯಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ನಮಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ."
  },
  {
    keywords: ['crane', 'heavy', 'lift', 'weight', 'ton', 'capacit', 'machin', 'escort', 'hydra', 'big', 'small', 'ಕ್ರೇನ್', 'ಭಾರ', 'ಎತ್ತಲು', 'ಟನ್', 'ದೊಡ್ಡ', 'ಸಣ್ಣ', 'ಮಶೀನ್'],
    en: "We have a fleet of 7 heavy-duty cranes, including Escorts F-15 (15 Ton), 12 Ton, and 9 Ton cranes. We can lift factory machinery, building materials, and more!",
    kn: "ನಮ್ಮಲ್ಲಿ 7 ದೊಡ್ಡ ಕ್ರೇನ್‌ಗಳಿವೆ (15 ಟನ್, 12 ಟನ್, 9 ಟನ್). ಫ್ಯಾಕ್ಟರಿ ಯಂತ್ರಗಳು ಮತ್ತು ಭಾರವಾದ ವಸ್ತುಗಳನ್ನು ನಾವು ಸುಲಭವಾಗಿ ಎತ್ತುತ್ತೇವೆ!"
  },
  {
    keywords: ['number', 'call', 'contact', 'phone', 'owner', 'talk', 'book', 'appoint', 'no', 'mobile', 'whatsapp', 'wa', 'ನಂಬರ್', 'ಕರೆ', 'ಫೋನ್', 'ಮಾಲೀಕ', 'ಮಾತನಾಡು', 'ಬುಕ್', 'ಮೊಬೈಲ್'],
    en: "You can reach us directly on any of these numbers:\n- +91 72598 71285\n- +91 95350 19402\n- +91 94813 79134\n- +91 99026 48298",
    kn: "ನಮ್ಮನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಲು ಈ ನಂಬರ್‌ಗಳಿಗೆ ಕರೆ ಮಾಡಿ:\n- +91 72598 71285\n- +91 95350 19402\n- +91 94813 79134\n- +91 99026 48298"
  },
  {
    keywords: ['car', 'accident', 'vehicle', 'truck', 'breakdown', 'crash', 'bus', 'ಕಾರು', 'ಅಪಘಾತ', 'ವಾಹನ', 'ಬಸ್'],
    en: "Yes, we regularly assist with vehicle breakdowns and accidents. If you need a crane to lift a car, truck, or bus urgently, please call our emergency numbers immediately.",
    kn: "ಹೌದು, ವಾಹನಗಳ ಅಪಘಾತ ಅಥವಾ ಬ್ರೇಕ್‌ಡೌನ್ ಆದಾಗ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಕಾರು ಅಥವಾ ಬಸ್ ಎತ್ತಲು ತಕ್ಷಣ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ."
  },
  {
    keywords: ['payment', 'cash', 'online', 'upi', 'gpay', 'card', 'ಹಣ', 'ಪಾವತಿ', 'ಗೂಗಲ್'],
    en: "We accept Cash, UPI (Google Pay, PhonePe), and direct bank transfers. Payment is usually collected after the job is safely completed.",
    kn: "ನಾವು ನಗದು, UPI (Google Pay, PhonePe) ಮತ್ತು ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇವೆ. ಕೆಲಸ ಮುಗಿದ ನಂತರ ನೀವು ಪಾವತಿಸಬಹುದು."
  },
  {
    keywords: ['fast', 'quick', 'arrive', 'reach', 'how long', 'ಬೇಗ', 'ಎಷ್ಟು ಸಮಯ', 'ಬರಲು'],
    en: "We dispatch our cranes immediately upon confirmation! Arrival time depends on the distance from Puttur, but we always strive to reach you as fast as possible.",
    kn: "ಕರೆ ಖಚಿತವಾದ ತಕ್ಷಣ ನಾವು ಕ್ರೇನ್ ಕಳುಹಿಸುತ್ತೇವೆ! ಪುತ್ತೂರಿನಿಂದ ಇರುವ ದೂರವನ್ನು ಅವಲಂಬಿಸಿ ನಾವು ಆದಷ್ಟು ಬೇಗ ತಲುಪುತ್ತೇವೆ."
  },
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskara', 'morning', 'ಹಲೋ', 'ನಮಸ್ಕಾರ', 'ನಮಸ್ತೆ', 'ಹಾಯ್'],
    en: "Hello! I am the S.N Crane Assistant. How can I help you today? Ask me about our prices, cranes, contact numbers, or service areas.",
    kn: "ನಮಸ್ಕಾರ! ನಾನೇನು ಸಹಾಯ ಮಾಡಬಹುದು? ನಮ್ಮ ಬೆಲೆಗಳು, ಫೋನ್ ನಂಬರ್, ಕ್ರೇನ್‌ಗಳು ಅಥವಾ ಸೇವೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ."
  }
]

export default function AIChatbot() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'ai', text: lang === 'kn' ? 'ನಮಸ್ಕಾರ! ನಾನು ಎಸ್.ಎನ್ ಕ್ರೇನ್ ಸಹಾಯಕ. ನಾನೇನು ಸಹಾಯ ಮಾಡಬಹುದು?' : 'Hello! I am the S.N Crane Assistant. How can I help you today?' }
  ])
  const [inp, setInp] = useState('')
  const bottomRef = useRef(null)
  const textareaRef = useRef(null)

  // Update greeting when language changes if no other messages exist
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'ai') {
      setMessages([{ sender: 'ai', text: lang === 'kn' ? 'ನಮಸ್ಕಾರ! ನಾನು ಎಸ್.ಎನ್ ಕ್ರೇನ್ ಸಹಾಯಕ. ನಾನೇನು ಸಹಾಯ ಮಾಡಬಹುದು?' : 'Hello! I am the S.N Crane Assistant. How can I help you today?' }])
    }
  }, [lang])

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    const handleOpen = () => setOpen(true)
    window.addEventListener('openAIChatbot', handleOpen)
    return () => window.removeEventListener('openAIChatbot', handleOpen)
  }, [])

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert(lang === 'kn' ? "ನಿಮ್ಮ ಬ್ರೌಸರ್ ಧ್ವನಿ ಹುಡುಕಾಟವನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ." : "Your browser does not support voice search.")
      return
    }
    
    const recognition = new SpeechRecognition()
    recognition.lang = lang === 'kn' ? 'kn-IN' : 'en-IN'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setIsListening(true)
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInp(transcript)
    }

    recognition.onerror = (event) => {
      console.error(event.error)
      setIsListening(false)
    }

    recognition.onend = () => setIsListening(false)

    recognition.start()
  }

  const send = (e) => {
    e.preventDefault()
    if (!inp.trim()) return

    const userText = inp.trim()
    setMessages(prev => [...prev, { sender: 'user', text: userText }])
    setInp('')
    if (textareaRef.current) textareaRef.current.style.height = '22px'

    // Smarter AI logic with keywords
    setTimeout(() => {
      const lower = userText.toLowerCase()
      let found = false
      
      for (const entry of KNOWLEDGE_BASE) {
        // If any keyword is found within the user's message
        if (entry.keywords.some(kw => lower.includes(kw))) {
          setMessages(prev => [...prev, { sender: 'ai', text: entry[lang] }])
          found = true
          break
        }
      }

      if (!found) {
        const fallback = lang === 'kn' 
          ? "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ಬೆಲೆಗಳು, ಪ್ರದೇಶಗಳು ಅಥವಾ ನಮ್ಮ ಕ್ರೇನ್‌ಗಳ ಬಗ್ಗೆ ಕೇಳಿ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು 'ಈಗ ಕರೆ ಮಾಡಿ' ಬಟನ್ ಬಳಸಿ!"
          : "I can help with prices, areas, or our cranes. For specific details, please tap the 'Call Now' button to speak with us directly!"
        setMessages(prev => [...prev, { sender: 'ai', text: fallback }])
      }
    }, 1000)
  }

  return (
    <div className="ai-fab">
      {open && (
        <div style={{
          position: 'absolute', bottom: '4.5rem', right: 0,
          width: 'calc(100vw - 3rem)', maxWidth: 340, height: 420, background: '#131720',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16,
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'fadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #f0a500, #ffc840)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ background: '#fff', width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🤖</div>
              <div>
                <p style={{ color: '#000', fontWeight: 800, margin: 0, fontSize: '0.95rem' }}>
                  {lang === 'kn' ? 'ಎಸ್.ಎನ್ ಕ್ರೇನ್ ಸಹಾಯಕ' : 'S.N Crane Assistant'}
                </p>
                <p style={{ color: 'rgba(0,0,0,0.7)', margin: 0, fontSize: '0.75rem', fontWeight: 600 }}>
                  {lang === 'kn' ? 'ಆನ್‌ಲೈನ್' : 'Online'}
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#000', fontSize: '1.8rem', cursor: 'pointer', padding: 0, lineHeight: 1 }}>&times;</button>
          </div>

          {/* Chat Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{
                  background: m.sender === 'user' ? '#f0a500' : 'rgba(255,255,255,0.05)',
                  color: m.sender === 'user' ? '#000' : '#e2e8f0',
                  padding: '10px 14px', borderRadius: 14,
                  borderBottomRightRadius: m.sender === 'user' ? 4 : 14,
                  borderBottomLeftRadius: m.sender === 'ai' ? 4 : 14,
                  fontSize: '0.88rem', lineHeight: 1.5,
                  wordBreak: 'break-word', whiteSpace: 'pre-wrap'
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={send} style={{ display: 'flex', padding: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0a0c10', alignItems: 'center' }}>
            <button type="button" onClick={startListening} title={lang === 'kn' ? 'ಧ್ವನಿ ಹುಡುಕಾಟ' : 'Voice Search'} style={{
              background: isListening ? '#ef4444' : 'rgba(255,255,255,0.08)',
              color: '#fff', border: 'none', borderRadius: '50%', width: 34, height: 34,
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginRight: '10px',
              transition: 'background 0.3s, transform 0.2s', transform: isListening ? 'scale(1.1)' : 'scale(1)'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </button>
            <textarea 
              ref={textareaRef}
              value={inp} 
              onChange={e => {
                setInp(e.target.value)
                e.target.style.height = '22px'
                e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(e)
                }
              }}
              rows={1}
              placeholder={isListening ? (lang === 'kn' ? 'ಕೇಳುತ್ತಿದ್ದೇನೆ...' : 'Listening...') : (lang === 'kn' ? 'ಪ್ರಶ್ನೆ ಕೇಳಿ...' : 'Ask a question...')}
              style={{ 
                flex: 1, background: 'transparent', border: 'none', color: '#fff', 
                outline: 'none', fontSize: '0.95rem', resize: 'none', 
                fontFamily: 'inherit', padding: '0', margin: '0 8px 0 0',
                height: '22px', lineHeight: '22px', overflowY: 'auto',
                wordBreak: 'break-word'
              }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', color: '#f0a500', cursor: 'pointer', fontWeight: 700, padding: '0 8px' }}>
              {lang === 'kn' ? 'ಕಳುಹಿಸಿ' : 'Send'}
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button 
        onClick={() => setOpen(!open)}
        aria-label="Open AI Chat"
        style={{
          width: 56, height: 56, borderRadius: '50%',
          background: '#f0a500', color: '#000', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(240,165,0,0.4)', cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  )
}
