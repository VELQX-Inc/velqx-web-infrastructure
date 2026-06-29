import React from 'react'
import i18n from 'i18next'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
]

export default function LanguageSwitcher() {
  const current = i18n.language || 'en'

  const change = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('i18nextLng', code)
  }

  return (
    <div className="flex items-center gap-2">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          className={`flex items-center justify-center w-8 h-8 text-sm rounded-full transition-all ${
            current === l.code ? 'ring-2 ring-[#00d4ff]' : 'hover:ring-1 hover:ring-white/20'
          }`}
          aria-label={l.label}
        >
          <span className="text-base leading-none">{l.flag}</span>
        </button>
      ))}
    </div>
  )
}
