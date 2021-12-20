import React from 'react'
import { useTranslation } from 'react-i18next'

import Project from './Project'
import { ContainerProjects } from './styles'
import { projectsPath } from './constants'

const ListProjects = () => {
  const { t } = useTranslation('projects')
  return (
    <ContainerProjects>
      {projectsPath.map((path, index) => (
        <Project
          color={t(`projects.${index}.color`)}
          description={t(`projects.${index}.description`)}
          gitHub={t(`projects.${index}.gitHub`)}
          imgPath={t(`projects.${index}.imgPath,  path: ${path}`)}
          key={t(`projects.${index}.title`)}
          live={t(`projects.${index}.live`)}
          title={t(`projects.${index}.title`)}
        />
      ))}
    </ContainerProjects>
  )
}

export default ListProjects
