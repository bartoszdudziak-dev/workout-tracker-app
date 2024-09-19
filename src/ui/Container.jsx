import { useLayout } from '../context/LayoutContext';

function Container({ children }) {
  const { isNavOpen, isMobile } = useLayout();

  return (
    <div
      className={`mx-auto ${!isNavOpen && !isMobile ? 'max-w-7xl' : 'max-w-5xl'}`}
    >
      {children}
    </div>
  );
}

export default Container;
