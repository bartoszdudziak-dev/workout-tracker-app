import {
  TbBarbell,
  TbHome,
  TbNotes,
  TbSettings,
  TbUserSquare,
} from 'react-icons/tb';

import NavItem from './NavItem';

function PrimaryNav() {
  return (
    <nav className='border-b md:border-b-0'>
      <ul className='text-secondary grid gap-2 border-t text-xl font-medium uppercase tracking-wider sm:text-2xl md:items-start md:gap-3 md:border-0'>
        <NavItem to='/' text='Home' icon={<TbHome />} />
        <NavItem to='/workouts' text='Workouts' icon={<TbBarbell />} />
        <NavItem to='/plans' text='Plans' icon={<TbNotes />} />
        <NavItem to='/settings' text='Settings' icon={<TbSettings />} />
        <NavItem to='/account' text='Account' icon={<TbUserSquare />} />
      </ul>
    </nav>
  );
}

export default PrimaryNav;
