import { getDaysInMonth, getDaysInYear } from 'date-fns';
import Button from '../../ui/Button';

import { useSearchParams } from 'react-router-dom';

const totalDaysInMonth = getDaysInMonth(new Date());

const currentYear = new Date().getFullYear();
const totalDaysInYear = getDaysInYear(new Date(currentYear, 0, 1));

function LastDaysControl() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue = searchParams.get('last')
    ? Number(searchParams.get('last'))
    : 7;

  const handleClick = (e) => {
    searchParams.set('last', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className='flex justify-center gap-2'>
      <Button
        value={7}
        type={7 === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        Last Week
      </Button>
      <Button
        value={totalDaysInMonth}
        type={totalDaysInMonth === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        Last Month
      </Button>
      <Button
        value={totalDaysInYear}
        type={totalDaysInYear === currentValue ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        Last Year
      </Button>
    </div>
  );
}

export default LastDaysControl;
