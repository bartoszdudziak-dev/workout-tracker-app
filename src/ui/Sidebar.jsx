import Logo from './Logo';
import PrimaryNav from './PrimaryNav';
import { useUser } from '../features/authentication/useUser';

function Sidebar() {
  const { user } = useUser();

  return (
    <aside className='row-span-full grid p-6'>
      <Logo />
      <PrimaryNav />
      <span className='self-end text-sm tracking-wider'>
        Logged as{' '}
        <span className='font-semibold uppercase text-accent-primary'>
          {user.user_metadata.firstName}
        </span>
      </span>
    </aside>
  );
}

export default Sidebar;
