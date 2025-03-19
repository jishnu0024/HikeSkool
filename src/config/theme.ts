
// Alternative Version (Oxford Blue)
export const themeConfig = {
  colors: {
    primary: {
      main: '#2563A7',      // Oxford blue - classic and authoritative
      hover: '#152f59',     // Darker oxford blue for hover
      light: 'rgba(27, 59, 111, 0.1)', // Light version for backgrounds
    },
    background: {
      dark: '#0C2340',      // Deep navy background
      darker: '#081829',    // Darker navy, near black
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
    border: {
      light: '#E5E7EB',
      main: '#D1D5DB',
    }
  }
}

export type ThemeColors = typeof themeConfig.colors;