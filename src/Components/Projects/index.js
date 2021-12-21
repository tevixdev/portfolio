import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Context as RefsContext } from 'Context/RefsContext'

import ListProjects from './List.js'
import { Div, Title, Subtitle } from './styles.js'

const Projects = () => {
  const { t } = useTranslation('projects')
  const { refs, setSection } = useContext(RefsContext)
  useEffect(() => {
    setSection('projects')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Div ref={refs.projects}>
      <Title>{t('title')}</Title>
      <Subtitle>
        {t('subtitle')}
      </Subtitle>
      <ListProjects/>
    </Div>
  )
}

export default Projects
