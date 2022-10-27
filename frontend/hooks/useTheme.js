import { useState, useMemo, useCallback } from 'react'
import { themes } from '../utils/useContextTheme'

export const useTheme = () => {
  const [theme, setTheme] = useState({ ...themes.light })

  const handleChangeTheme = useCallback(() => {
    const { bg } = theme
    setTheme(() =>
      bg === themes.dark.bg ? { ...themes.light } : { ...themes.dark },
    )
  }, [theme])
  const themeProviderValue = useMemo(
    () => ({ theme, handleChangeTheme }),
    [theme, handleChangeTheme],
  )
  return { themeProviderValue, handleChangeTheme }
}
