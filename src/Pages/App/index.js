import React from 'react'

import Header from 'Components/Layout/Header'
import Container from 'Components/Layout/Container'
import Home from 'Components/Home'
import About from 'Components/About'
import Skills from 'Components/Skills'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import { Section } from './styles'
const App = () => {
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
