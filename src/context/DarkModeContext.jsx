import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode',
  );

  const toggleDarkMode = () => setIsDarkMode((dark) => !dark);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error(
      'DarkModeContext was used outside of DarkModeContextProvider',
    );

  return context;
}

export { DarkModeProvider, useDarkMode };
