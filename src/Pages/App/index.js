import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { Context as RefsContext } from 'Context/RefsContext'
import Header from 'Components/Layout/Header'
import Container from 'Components/Layout/Container'
import Home from 'Components/Home'
import About from 'Components/About'
import Skills from 'Components/Skills'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import * as regex from 'Constants/regex'
import { Section } from './styles'
const App = () => {
  const { pathname } = useLocation()
  const { refs } = useContext(RefsContext)
  const [ref, setRef] = useState(refs.home)
  /*   useEffect(() => {
    const handleScroll = () => {
      const { y } = ref.current.getBoundingClientRect()
      if (y <= 0) {
        !regex.home.test(pathname) && (history.pushState({}, '', '/about'))
        !regex.about.test(pathname) && (history.pushState({}, '', '/projects'))
        !regex.home.test(pathname) && (history.pushState({}, '', '/skills'))
        !regex.home.test(pathname) && (history.pushState({}, '', '/contact'))
      }
       document.title = 'about me'
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname, ref, refs.contact, refs.projects, refs.skills])
 */

  return (
    <Header>
      <Container>
        <Home/>
      </Container>
      <Section>
        <About/>
      </Section>
      <Container>
        <Skills/>
        <Projects/>
      </Container>
      <Section>
        <Contact/>
      </Section>
    </Header>
  )
}

export default App
