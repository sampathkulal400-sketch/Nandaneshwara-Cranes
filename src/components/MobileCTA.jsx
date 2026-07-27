import { useLanguage } from '../LanguageContext'

export default function MobileCTA() {
  const { t, lang } = useLanguage()
  return (
    <div className="mob-bar">
      <button onClick={() => window.dispatchEvent(new Event('openAIChatbot'))}
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: '#fff', 
          border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer',
          padding: '17px 8px', minHeight: 56, width: '100%',
          boxShadow: '0 -4px 20px rgba(59,130,246,0.2)'
        }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        {lang === 'kn' ? 'AI ಸಹಾಯಕ' : 'AI Chat'}
      </button>

      <button onClick={() => window.dispatchEvent(new Event('openContactModal'))}
        style={{
          background: 'linear-gradient(135deg, #f0a500, #ffc840)', color: '#000', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer',
          padding: '17px 4px', minHeight: 56, width: '100%',
          boxShadow: '0 -4px 20px rgba(240,165,0,0.2)'
        }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        {t('call_whatsapp')}
      </button>
    </div>
  )
}
