import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TfiLayoutSidebarLeft, TfiLayoutSidebarNone } from 'react-icons/tfi';

import ButtonIcon from './ButtonIcon';

import { useLayout } from '../context/LayoutContext';

function ToggleNavButton() {
  const { isMobile, isNavOpen, toggleNav } = useLayout();

  return (
    <ButtonIcon
      onClick={toggleNav}
      size='medium'
      icon={
        isMobile ? (
          isNavOpen ? (
            <AiOutlineClose />
          ) : (
            <AiOutlineMenu />
          )
        ) : isNavOpen ? (
          <TfiLayoutSidebarLeft />
        ) : (
          <TfiLayoutSidebarNone />
        )
      }
    />
  );
}

export default ToggleNavButton;
