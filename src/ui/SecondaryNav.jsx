import { TbLogout, TbUserSquare } from 'react-icons/tb';

import ToggleNavigationButton from './ToggleNavButton';
import ButtonIcon from './ButtonIcon';

import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function SecondaryNav() {
  const navigate = useNavigate();

  return (
    <nav className='w-full p-2 sm:p-3 md:p-4'>
      <ul className='flex items-center gap-2 sm:gap-3 md:gap-4'>
        <li className='mr-auto'>
          <ToggleNavigationButton />
        </li>
        <li className='mr-3'>
          <DarkModeToggle />
        </li>
        <li>
          <ButtonIcon
            icon={<TbUserSquare />}
            onClick={() => navigate('/settings')}
            type='secondary'
            size='large'
          />
        </li>
        <li>
          <ButtonIcon icon={<TbLogout />} type='secondary' size='large' />
        </li>
      </ul>
    </nav>
  );
}

export default SecondaryNav;
