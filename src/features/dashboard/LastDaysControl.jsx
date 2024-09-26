import Button from '../../ui/Button';
import { useSearchParams } from 'react-router-dom';

function LastDaysControl() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue = searchParams.get('period')
    ? searchParams.get('period')
    : 'lastWeek';

  const handleClick = (e) => {
    searchParams.set('period', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className='flex justify-center gap-2'>
      <Button
        value={'lastWeek'}
        type={'lastWeek' === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        Last Week
      </Button>
      <Button
        value='thisMonth'
        type={'thisMonth' === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        This Month
      </Button>
      <Button
        value='thisYear'
        type={'thisYear' === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        This Year
      </Button>
    </div>
  );
}

export default LastDaysControl;
