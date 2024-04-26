import { createContext, useState } from 'react'

export const ThemeContext = createContext('light')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}
