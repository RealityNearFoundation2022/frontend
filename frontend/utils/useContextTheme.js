import React from 'react'

export const themes = {
  bgLight: 'bg-light',
  bgDark: 'bg-dark',
  txtLight: '-text-light',
  txtDark: '-text-dark',
}

const ThemeContext = React.createContext(themes.light)

export default ThemeContext
