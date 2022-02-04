import React from 'react'
import { useTranslation } from 'react-i18next'

import { Footer, Img, Title, ContainerIcons, A } from './styles'
import logo from 'Assets/Images/logo-white.svg'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <Footer>
      <Img alt='logo' src={logo}/>
      <Title>
        {t('title')}
      </Title>
      <ContainerIcons>
        <A
          aria-hidden="true"
          className="fab fa-instagram"
          href='https://www.instagram.com/estebanmilicich/'
          target='_blank'
        />
        <A
          aria-hidden="true"
          className="fab fa-linkedin-in"
          href='https://www.linkedin.com/in/estebanmilicich/'
          target='_blank'
        />
      </ContainerIcons>
    </Footer>
  )
}

export default Contact
