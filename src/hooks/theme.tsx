import React, { ChangeEvent, createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
  setColor(event:ChangeEvent<HTMLInputElement>): void;
}

interface Theme {
  name: string;
  colors: {
    primary: string,
    secondary: string,
    text: string
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);
export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);

  const toggleTheme = useCallback(() => {
    const selectedTheme = themes.findIndex(t => t.name === theme.name);

    if (selectedTheme < themes.length - 1) {
      setTheme(themes[selectedTheme + 1]);
    }else{
      setTheme(themes[0]);
    }
  }, [theme]);

  const setColor = useCallback((event) => {   
    const newTheme = {
      ...theme,
      colors: {
        ...theme.colors,
        [event.target.name]: event.target.value
      }
    }
    setTheme(newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, setColor }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;