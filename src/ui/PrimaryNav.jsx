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
    <nav className='border-b border-tetiary md:border-b-0'>
      <ul className='grid gap-2 border-t border-tetiary py-2 text-xl font-medium uppercase tracking-wider text-secondary sm:text-2xl md:items-start md:gap-3 md:border-0'>
        <NavItem to='/dashboard' text='Home' icon={<TbHome />} />
        <NavItem to='/workouts' text='Workouts' icon={<TbBarbell />} />
        <NavItem to='/plans' text='Plans' icon={<TbNotes />} />
        <NavItem to='/settings' text='Settings' icon={<TbSettings />} />
        <NavItem to='/account' text='Account' icon={<TbUserSquare />} />
      </ul>
    </nav>
  );
}

export default PrimaryNav;
