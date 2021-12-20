import React from 'react'

import { useTranslation } from 'react-i18next'

import { Container, Title, Subtitle } from './styles'

const About = () => {
  const { t } = useTranslation('about')
  return (
    <Container>
      <Title>{t('title')}</Title>
      <Subtitle>
        {t('subtitle')}
      </Subtitle>
    </Container>
  )
}

export default About
