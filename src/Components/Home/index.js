import React from 'react'

import { useTranslation } from 'react-i18next'

import { Container, Title, Subtitle, ImgProfile, ImgIt } from './styles'
import myProfileImg from 'Assets/Images/esteban-linkedin.jpg'
import itImg from 'Assets/Images/it.svg'

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <Title>{t('title')} </Title>
      <Subtitle>{t('subtitle')}</Subtitle>
      <ImgProfile alt='Esteban Milicich' src={myProfileImg}/>
      <ImgIt alt={t('imgIt')} src={itImg}/>
    </Container>
  )
}

export default Home
