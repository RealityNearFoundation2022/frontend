import React from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '../translation/languages'
export default function TranslationModal() {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng, (err) => err)
  }
  return (
    <div className="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded">
      <p> {i18n.language}</p>
      {languages.map((lng) => (
        <button type="button" onClick={() => handleChangeLanguage(lng)}>
          {lng}
        </button>
      ))}
    </div>
  )
}
