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
        <img src={logo} alt="logo" />
        <Title>Best supply helper</Title>
      </Logo>
      <Content>
        <VerticalTabs onChange={onTabChange} />
      </Content>
    </Wrapper>
  )
})

Sidebar.displayName = 'Sidebar'
