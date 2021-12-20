import React from 'react'

import { Nav, Img } from './styles'
import logo from 'Assets/Images/logo-violet.svg'
import SelectLanguage from '../SelectLanguage'

const Header = ({ children }) => {
  return (
    <>
      <Nav>
        <Img alt='logo' src={logo}/>
        <SelectLanguage/>
      </Nav>
      {children}
    </>

  )
}

export default Header
