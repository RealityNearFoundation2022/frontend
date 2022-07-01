import React from 'react'
import realityLight from '../assets/img/random/LOGO REALITY GREEN.png'
import realityDark from '../assets/img/random/LOGO REALITY WHITE.png'
export const themes = {
  light: {
    bg: 'bg-light',
    txt: '-text-light',
    reality: realityLight,
  },
  dark: {
    bg: 'bg-dark',
    txt: '-text-dark',
    reality: realityDark,
  },
}

const ThemeContext = React.createContext(themes.light)

export default ThemeContext
