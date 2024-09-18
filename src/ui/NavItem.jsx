import { NavLink } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';

function NavItem({ icon = '', to = '', text = '' }) {
  const { isMobile, toggleNav } = useLayout();

  return (
    <li
      className='transition-colors duration-200 hover:bg-secondary md:rounded-md'
      onClick={isMobile ? toggleNav : null}
    >
      <NavLink
        to={to}
        className='flex items-center gap-4 p-2 outline-none focus-visible:ring-2 focus-visible:ring-accent-primary md:rounded-md md:p-2'
      >
        {icon} <span className='text-sm md:text-base'>{text}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
