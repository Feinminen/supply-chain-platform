import React, { memo } from 'react'

import { VerticalTabs } from '../VerticalTabs'
import { ContentType } from '../../services/hooks/useTableContent/types'

import { Title, Wrapper, Content, Logo } from './styled'
import logo from './images/logo.svg'

interface SidebarProps {
  onTabChange: (title: ContentType) => void
}

export const Sidebar = memo(({ onTabChange }: SidebarProps) => {
  return (
    <Wrapper>
      <Logo>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Title>Best supply helper</Title>
      </Logo>
      <Content>
        <VerticalTabs onChange={onTabChange} />
      </Content>
    </Wrapper>
  )
})

Sidebar.displayName = 'Sidebar'
