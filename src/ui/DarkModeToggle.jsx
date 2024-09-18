import { TbMoon, TbMoonFilled, TbSun, TbSunFilled } from 'react-icons/tb';

import ButtonToggle from './ButtonToggle';

import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonToggle
      id='darkModeToggle'
      on={
        <span className='text-sm text-secondary xs:text-base md:text-lg lg:text-2xl'>
          {isDarkMode ? <TbMoonFilled /> : <TbMoon />}
        </span>
      }
      off={
        <span className='text-sm text-secondary xs:text-base md:text-lg lg:text-2xl'>
          {isDarkMode ? <TbSun /> : <TbSunFilled />}
        </span>
      }
      isChecked={isDarkMode}
      onChange={toggleDarkMode}
    />
  );
}

export default DarkModeToggle;
