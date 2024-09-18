import { TbLogout } from 'react-icons/tb';

import ButtonIcon from '../../ui/ButtonIcon';

import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon
      icon={<TbLogout />}
      type='secondary'
      size='large'
      onClick={logout}
      disabled={isLoading}
    />
  );
}

export default Logout;
