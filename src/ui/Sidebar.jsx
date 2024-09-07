import Logo from './Logo';
import PrimaryNav from './PrimaryNav';

function Sidebar() {
  return (
    <aside className='row-span-full space-y-20 p-6'>
      <Logo />
      <PrimaryNav />
    </aside>
  );
}

export default Sidebar;