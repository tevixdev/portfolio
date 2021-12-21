import React, { useContext, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { Context as RefsContext } from 'Context/RefsContext'
import { Container, Title, Subtitle, ImgProfile, ImgIt } from './styles'
import myProfileImg from 'Assets/Images/esteban-linkedin.jpg'
import itImg from 'Assets/Images/it.svg'

const Home = () => {
  const { refs, setSection } = useContext(RefsContext)
  const { t } = useTranslation('home')
  useEffect(() => {
    setSection('home')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container ref={refs.home}>
      <Title>{t('title')} </Title>
      <Subtitle>{t('subtitle')}</Subtitle>
      <ImgProfile alt='Esteban Milicich' src={myProfileImg}/>
      <ImgIt alt={t('imgIt')} src={itImg}/>
    </Container>
  )
}

export default Home
