import { NavLink } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';

function NavItem({ icon, to, text }) {
  const { isMobile, toggleNav } = useLayout();

  return (
    <li
      className='rounded-md p-2 transition-all duration-200 hover:bg-light-secondary'
      onClick={isMobile ? toggleNav : null}
    >
      <NavLink to={to} className='flex items-center gap-4'>
        {icon} <span className='text-sm md:text-base'>{text}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
