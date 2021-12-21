import React from 'react'
import { useTranslation } from 'react-i18next'

import ListProjects from './List.js'
import { Div, Title, Subtitle } from './styles.js'

const Projects = () => {
  const { t } = useTranslation('projects')
  return (
    <Div>
      <Title>{t('title')}</Title>
      <Subtitle>
        {t('subtitle')}
      </Subtitle>
      <ListProjects/>
    </Div>
  )
}

export default Projects
