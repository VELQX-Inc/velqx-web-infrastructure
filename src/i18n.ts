import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import ar from './locales/ar/translation.json'
import es from './locales/es/translation.json'
import fr from './locales/fr/translation.json'
import de from './locales/de/translation.json'
import zh from './locales/zh/translation.json'
import ru from './locales/ru/translation.json'
import pt from './locales/pt/translation.json'
import tr from './locales/tr/translation.json'
import hi from './locales/hi/translation.json'

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  zh: { translation: zh },
  ru: { translation: ru },
  pt: { translation: pt },
  tr: { translation: tr },
  hi: { translation: hi },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
