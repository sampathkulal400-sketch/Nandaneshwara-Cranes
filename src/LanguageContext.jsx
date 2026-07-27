import { createContext, useState, useContext, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en') // 'en' or 'kn'

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang])

  const t = (key) => {
    return translations[lang][key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
