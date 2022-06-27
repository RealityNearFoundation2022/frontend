import React from 'react'

export const themes = {
  light: {
    bg: 'bg-light',
    txt: '-text-light',
  },
  dark: {
    bg: 'bg-dark',
    txt: '-text-dark',
  },
  bgLight: 'bg-light',
  bgDark: 'bg-dark',
  txtLight: '-text-light',
  txtDark: '-text-dark',
}

const ThemeContext = React.createContext(themes.light)

export default ThemeContext
