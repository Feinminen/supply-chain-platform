import { base } from './base'
import { Theme } from './types'

export const light: Theme = {
  ...base,
  palette: {
    primary: '#1F2041',
    primaryContrast: '#FFFFFF',
    secondary: 'rgba(31, 32, 65, 0.75)',
    tertiary: 'rgba(31, 32, 65, 0.25)',
    accent: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    separator: 'rgba(31, 32, 65, 0.25)',
    focus: '#3f9af5',
    positive: '#33be51',
    negative: '#ee655a',
  },
  background: {
    base: '#E5E5E5',
    primary: '#FFFFFF',
  },
  shadow: {
    normal: '0px 4px 48px rgba(0, 0, 0, 0.12)',
    small: '0px 4px 14px rgba(0, 0, 0, 0.24)',
  },
}
