import { TbSortAscending, TbSortDescending } from 'react-icons/tb';
import ButtonIcon from './ButtonIcon';

import { useSearchParams } from 'react-router-dom';

function SortByOrder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const order = searchParams.get('order') || '';

  const isAscending = order === 'asc' || '';

  const handleClick = () => {
    searchParams.set('order', isAscending ? 'desc' : 'asc');
    setSearchParams(searchParams);
  };

  return (
    <ButtonIcon
      type='secondary'
      icon={isAscending ? <TbSortAscending /> : <TbSortDescending />}
      onClick={handleClick}
    />
  );
}

export default SortByOrder;
