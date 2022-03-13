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
  const [theme, setTheme] = useState<Theme>(() => {
      const storagedThemeName = localStorage.getItem('@themeSeleted:theme');
      const storagedColors = localStorage.getItem('@themeSeleted:customColors');
      let applyTheme = themes[0];

      try{
        if (storagedThemeName) {
          applyTheme = themes.find(theme => theme.name === storagedThemeName) || themes[0];
        }else{
          localStorage.setItem('@themeSeleted:theme', themes[0].name);
        }

        if (storagedColors) {
          const colors = JSON.parse(storagedColors);
  
          return {
            ...applyTheme,
            colors: {
              ...applyTheme.colors,
              ...colors
            }
          }
        }
      }catch{
        return applyTheme;
      }

      return applyTheme;
    }
  );

  const toggleTheme = useCallback(() => {
    const selectedTheme = themes.findIndex(t => t.name === theme.name);
    if (selectedTheme < themes.length - 1) {
      setTheme(themes[selectedTheme + 1]);
      localStorage.setItem('@themeSeleted:theme', themes[selectedTheme + 1].name);
    }else{
      setTheme(themes[0]);
      localStorage.setItem('@themeSeleted:theme', themes[0].name);
    }
    localStorage.removeItem('@themeSeleted:customColors');
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
    localStorage.setItem('@themeSeleted:customColors', JSON.stringify(newTheme.colors));
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