import { TbArrowNarrowLeft } from 'react-icons/tb';

import ButtonIcon from './ButtonIcon';

import { useLocation, useNavigate } from 'react-router-dom';

function ButtonBack() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHistoryEmpty = location.key === 'default';

  return (
    <ButtonIcon
      onClick={() => navigate(-1, { fallback: '/dahsboard' })}
      icon={<TbArrowNarrowLeft />}
      type='secondary'
      size='large'
      disabled={isHistoryEmpty}
    />
  );
}

export default ButtonBack;
