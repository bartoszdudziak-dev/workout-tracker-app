import Logo from './Logo';
import SidebarNav from './PrimaryNav';

function Sidebar() {
  return (
    <aside className='row-span-full space-y-20 p-6'>
      <Logo />
      <SidebarNav />
    </aside>
  );
}

export default Sidebar;
