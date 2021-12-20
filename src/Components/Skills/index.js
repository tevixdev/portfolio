import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Ul, P, Img, ContainerLogo, Bold } from './styles'

import CodeIcon from 'Components/Icons/Code'
import { skillsPath, devToolsPath } from './constants'

const Skills = () => {
  const { t } = useTranslation('skills')
  return (
    <Container className='flex-column-center'>
      <figure>
        <CodeIcon/>
      </figure>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <P>{t('languages')}</P>
      <ContainerLogo>
        {skillsPath.map((skill, index) => (
          <picture key={skill}>
            <Bold>{t(`skills.${index}.name`)}</Bold>
            <Img
              alt={t(`skills.${index}.name`)}
              src={t(`skills.${index}.logo, logoPath: ${skill}`)}/>
          </picture>
        ))}
      </ContainerLogo>
      <P>Dev Tools:</P>
      <Ul>
        <ContainerLogo>
          {devToolsPath.map((devTool, index) => (
            <picture key={devTool}>
              <Bold>{t(`tools.${index}.name`)}</Bold>
              <Img
                alt={t(`tools.${index}.name`)}
                src={t(`tools.${index}.logo, logoPath: ${devTool}`)}
              />
            </picture>
          ))}
        </ContainerLogo>
      </Ul>
    </Container>
  )
}

export default Skills
