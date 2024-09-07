import { GrLogout } from 'react-icons/gr';
import { VscAccount } from 'react-icons/vsc';

import ToggleNavigationButton from './ToggleNavButton';
import ButtonIcon from './ButtonIcon';

import { useNavigate } from 'react-router-dom';
import { TbLogout, TbUserSquare } from 'react-icons/tb';

function SecondaryNav() {
  const navigate = useNavigate();

  return (
    <nav className='w-full p-2 sm:p-3 md:p-4'>
      <ul className='flex items-center gap-6'>
        <li className='mr-auto'>
          <ToggleNavigationButton />
        </li>
        <li>
          <ButtonIcon
            icon={<TbUserSquare />}
            onClick={() => navigate('/settings')}
            size='medium'
          />
        </li>
        <li>
          <ButtonIcon icon={<TbLogout />} size='medium' />
        </li>
      </ul>
    </nav>
  );
}

export default SecondaryNav;