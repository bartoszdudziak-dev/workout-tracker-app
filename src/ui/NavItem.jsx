import { NavLink } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';

function NavItem({ icon = '', to = '', text = '' }) {
  const { isMobile, toggleNav } = useLayout();

  return (
    <li
      className='hover:bg-secondary rounded-md transition-colors duration-200'
      onClick={isMobile ? toggleNav : null}
    >
      <NavLink
        to={to}
        className='flex items-center gap-4 p-2 transition-all duration-200 focus:outline-2 focus:outline-offset-4 focus:outline-accent-primary sm:p-3 md:p-2'
      >
        {icon} <span className='text-sm md:text-base'>{text}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
