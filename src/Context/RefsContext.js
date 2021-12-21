import React, { createContext, useState, useRef, useEffect } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const initialRefs = {
    home: useRef(),
    aboutMe: useRef(),
    skills: useRef(),
    projects: useRef(),
    contact: useRef()
  }
  const [refs, setRefs] = useState(initialRefs)
  const [section, setSection] = useState()

  const changeStateUrl = (entries, observer) => {
    entries.forEach(entrie => (
      entrie.isIntersecting && console.log(entrie.target)
    ))
  }
  const observer = new IntersectionObserver(changeStateUrl, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  })

  useEffect(() => {
    console.log(refs.home.current)
    refs.home.current && observer.observe(refs.home.current)
    refs.aboutMe.current && observer.observe(refs.aboutMe.current)
    refs.skills.current && observer.observe(refs.skills.current)
    refs.projects.current && observer.observe(refs.projects.current)
    refs.contact.current && observer.observe(refs.contact.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section])

  const value = {
    refs,
    setRefs,
    setSection
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
