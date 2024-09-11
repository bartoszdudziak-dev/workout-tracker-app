import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import PrimaryNavigation from './PrimaryNav';
import Container from './Container';

import { useLayout } from '../context/LayoutContext';

function AppLayout() {
  const { isMobile, isNavOpen } = useLayout();

  return (
    <div
      className={`bg-primary text-primary grid h-dvh ${
        isMobile
          ? `grid-rows-[auto_1fr] ${isNavOpen && 'grid-rows-[auto_auto_1fr]'}`
          : `grid-rows-[auto_1fr] ${isNavOpen ? 'grid-cols-[15rem_1fr]' : 'grid-cols-[1fr]'}`
      }`}
    >
      <Header />

      {isMobile ? isNavOpen && <PrimaryNavigation /> : isNavOpen && <Sidebar />}

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
