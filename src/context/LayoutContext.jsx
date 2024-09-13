import { createContext, useContext, useState } from 'react';

import { useMobile } from '../hooks/useMobile';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const { isMobile } = useMobile();

  const [isNavOpen, setIsNavOpen] = useState(isMobile ? false : true);
  const toggleNav = () => setIsNavOpen((open) => !open);

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
