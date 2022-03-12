import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from './CssBaseline'
import { ThemeProvider } from './theme'
import { light } from './theme/light'
import { App } from './containers/App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
