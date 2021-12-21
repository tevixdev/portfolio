import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Context as RefsContext } from 'Context/RefsContext'
import { Footer, Img, Title, ContainerIcons, A } from './styles'
import logo from 'Assets/Images/logo-white.svg'

const Contact = () => {
  const { refs, setSection } = useContext(RefsContext)
  const { t } = useTranslation('contact')
  useEffect(() => {
    setSection('contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Footer ref={refs.contact}>
      <Img alt='logo' src={logo}/>
      <Title>
        {t('title')}
      </Title>
      <ContainerIcons>
        <A
          className="fab fa-instagram"
          href='https://www.instagram.com/estebanmilicich/'
          target='_blank'
        />
        <A
          className="fab fa-linkedin-in"
          href='https://www.linkedin.com/in/estebanmilicich/'
          target='_blank'
        />
      </ContainerIcons>
    </Footer>
  )
}

export default Contact
