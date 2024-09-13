import { TbMoon, TbMoonFilled, TbSun, TbSunFilled } from 'react-icons/tb';

import ButtonToggle from './ButtonToggle';

import { useDarkMode } from '../context/DarkModeContext';
import { useEffect } from 'react';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('light');
    }
  }, [isDarkMode]);

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
