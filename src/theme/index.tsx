import React, { FC } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { Theme } from './types'

interface ThemeProps {
  theme: Theme
}

export const ThemeProvider: FC<ThemeProps> = ({ children, theme }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)
