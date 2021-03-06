import { createGlobalStyle } from 'styled-components'

export const CssBaseline = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    background-color: ${({ theme }) => theme.background.base};
    color: ${({ theme }) => theme.palette.primary};
  }

  #root {
    min-height: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }
`
