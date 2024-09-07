import { AiOutlineHome } from 'react-icons/ai';
import { PiBarbell, PiNotebook } from 'react-icons/pi';
import { VscGear } from 'react-icons/vsc';

import NavItem from './NavItem';

function PrimaryNav() {
  return (
    <nav className='border-b md:border-b-0'>
      <ul className='grid gap-2 border-t text-base font-medium uppercase tracking-wider text-light-secondary sm:text-xl md:items-start md:gap-3 md:border-0 md:text-2xl'>
        <NavItem to='/' text='Home' icon={<AiOutlineHome />} />
        <NavItem to='/workouts' text='Workouts' icon={<PiBarbell />} />
        <NavItem to='/plans' text='Plans' icon={<PiNotebook />} />
        <NavItem to='/settings' text='Settings' icon={<VscGear />} />
      </ul>
    </nav>
  );
}

export default PrimaryNav;
