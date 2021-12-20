import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const language = localStorage.getItem('language') || 'es'

i18n
  .use(Backend)
  .use(initReactI18next).init({
    lng: language,
    fallbackLng: 'es'
  })
