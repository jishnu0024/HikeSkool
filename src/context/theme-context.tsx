"use client"

import React, { createContext, useContext, useState } from 'react'
import { themeConfig, ThemeColors } from '@/config/theme'

type ThemeContextType = {
  colors: ThemeColors
  updateTheme: (newColors: Partial<ThemeColors>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(themeConfig.colors)

  const updateTheme = (newColors: Partial<ThemeColors>) => {
    setColors(prevColors => ({
      ...prevColors,
      ...newColors,
    }))
  }

  return (
    <ThemeContext.Provider value={{ colors, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}