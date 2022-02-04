import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Img, ContainerImg, Figure, TitleImg, Description, Button, P, I } from './styles'
import 'index.css'
import { white } from 'Constants/colors'

const Project = ({
  title,
  description,
  imgPath,
  gitHub,
  live,
  color
}) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const backgroundColor = mouseEnter ? '#141c3a' : color
  const opacity = mouseEnter ? 1 : '.85'
  const { t } = useTranslation('projects')

  const onMouseEnter = () => {
    setMouseEnter(true)
  }
  const onMouseLeave = () => {
    setMouseEnter(false)
  }

  return (
    <Figure
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ContainerImg
        color={backgroundColor}
        description={description}
        opacity={opacity}
        title={title}
      >
        {mouseEnter
          ? <Description className='flex-column-center'>
            <P>{description}</P>
            <Button color={white} colorHover={white} href={live} target='_blank'>
              {t('button')}
              <I className="fas fa-chevron-right"></I>
            </Button>
          </Description>
          : <TitleImg>{title}</TitleImg>

        }
      </ContainerImg>
      <Img
        alt={title}
        src={imgPath}
        style={{ backgroundImage: `url(${imgPath})` }}
      />
    </Figure>
  )
}

export default Project
