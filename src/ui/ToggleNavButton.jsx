import {
  TbArrowBarToLeft,
  TbArrowBarToRight,
  TbMenu2,
  TbX,
} from 'react-icons/tb';

import ButtonIcon from './ButtonIcon';

import { useLayout } from '../context/LayoutContext';

function ToggleNavButton() {
  const { isMobile, isNavOpen, toggleNav } = useLayout();

  return (
    <ButtonIcon
      onClick={toggleNav}
      type='secondary'
      size='large'
      icon={
        isMobile ? (
          isNavOpen ? (
            <TbX />
          ) : (
            <TbMenu2 />
          )
        ) : isNavOpen ? (
          <TbArrowBarToLeft />
        ) : (
          <TbArrowBarToRight />
        )
      }
    />
  );
}

export default ToggleNavButton;
