import React, { createContext, useState, useRef } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const initialRefs = {
    home: useRef(),
    aboutMe: useRef(),
    contact: useRef(),
    projects: useRef(),
    skills: useRef()
  }
  /* const [refHome, setRefHome] = useState()
  const [refAboutMe, setRefAboutMe] = useState()
  const [refContact, setRefContact] = useState()
  const [refProjects, setRefProjects] = useState()
  const [refSkills, setRefSkills] = useState() */

  const [refs, setRefs] = useState(initialRefs)

  const value = {
    refs,
    setRefs
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
