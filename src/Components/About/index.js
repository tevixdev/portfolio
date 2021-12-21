import React, { useContext, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { Context as RefsContext } from 'Context/RefsContext'
import { Container, Title, Subtitle } from './styles'

const About = () => {
  const { refs, setSection } = useContext(RefsContext)
  const { t } = useTranslation('about')
  useEffect(() => {
    setSection('aboutMe')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container ref={refs.aboutMe}>
      <Title>{t('title')}</Title>
      <Subtitle>
        {t('subtitle')}
      </Subtitle>
    </Container>
  )
}

export default About
