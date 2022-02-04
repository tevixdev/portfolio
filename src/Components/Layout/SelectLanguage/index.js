import React from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from 'Components/Projects/styles'
import { Img, Span } from './styles'
import { colorPrimaryMain, white } from 'Constants/colors'
import flagSpanish from 'Assets/Images/spain_flag.ico'
import flagEnglish from 'Assets/Images/united_flag.ico'

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation('selectLanguage')
  const language = localStorage.getItem('language')
  const flag = (language === 'es' || language === null) ? flagEnglish : flagSpanish

  const changeLanguage = ({ language }) => {
    if (language === null || language === 'es') {
      i18n.changeLanguage('en')
      localStorage.setItem('language', 'en')
    } else {
      i18n.changeLanguage('es')
      localStorage.setItem('language', 'es')
    }
  }
  return (
    <Button
      color={colorPrimaryMain}
      colorHover={white}
      onClick={() => changeLanguage({ language })}
    >
      <Span>
        <Img alt='language' src={flag}/>
        {t('textPrimary')}
      </Span>
    </Button>
  )
}

export default SelectLanguage
