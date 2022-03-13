import React from 'react'

import { Title, Wrapper } from './styled'
import logo from './images/logo.svg'

export function Header() {
  return (
    <Wrapper>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <Title>Best supply helper</Title>
    </Wrapper>
  )
}
