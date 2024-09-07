import { createContext, useContext, useEffect, useState } from 'react';
import { MAX_MOBILE_WIDTH } from '../consts';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    () => !window.matchMedia(`(min-width: ${MAX_MOBILE_WIDTH})`).matches,
  );

  const toggleNav = () => setIsNavOpen((open) => !open);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${MAX_MOBILE_WIDTH})`);
    const updateMedia = () => setIsMobile(!mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMedia);
    return () => mediaQuery.removeEventListener('change', updateMedia);
  }, []);

  return (
    <LayoutContext.Provider value={{ isMobile, isNavOpen, toggleNav }}>
      {children}
    </LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);

  if (context === undefined)
    throw new Error('LayoutContext was used outside of LayoutContextProvider');

  return context;
}

export { LayoutProvider, useLayout };
