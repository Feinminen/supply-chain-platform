export interface BaseTheme {
  baseSize: string
  fontFamily: string

  borderRadius: {
    small: string
    normal: string
  }
}

export interface Theme extends BaseTheme {
  palette: {
    primary: string
    primaryContrast: string
    secondary: string
    tertiary: string
    accent: string
    separator: string
    focus: string
    positive: string
    negative: string
  }
  background: {
    base: string
    primary: string
    secondary: string
  }
  shadow: {
    normal: string
    small: string
  }
}
