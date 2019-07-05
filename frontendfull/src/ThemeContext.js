import React, { useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.js";

/**
 * Q & A:
 *
 * Q: Why is this not in the context component folder?
 * A: This uniquely uses EmotionThemeProvider, which must be at the top level of the application
 * 
 * Q: Do you need to import this as a context like normal?
 * A: Nope, themes are availible by using props.theme.{whatever}, from any child component of the application 
 */

const ThemeContext = createContext({
  dark: false,
  toggle: () => { }
});

const useTheme = () => useContext(ThemeContext);

const useEffectChangeMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false
  });
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true });
  }, [themeState]);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectChangeMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
