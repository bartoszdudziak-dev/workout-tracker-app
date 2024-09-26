import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getWorkoutsAfterDate } from '../../services/workoutsApi';
import {
  differenceInCalendarDays,
  getDate,
  startOfYear,
  subDays,
} from 'date-fns';

const today = new Date();
const thisMonthDays = getDate(today);
const thisYearDays = differenceInCalendarDays(today, startOfYear(today)) + 1;

const periods = {
  lastWeek: 7,
  thisMonth: thisMonthDays,
  thisYear: thisYearDays,
};

export function useRecentWorkouts() {
  const [searchParams] = useSearchParams();

  const period = searchParams.get('period')
    ? searchParams.get('period')
    : 'lastWeek';

  const date = subDays(new Date(), periods[period]).toISOString();

  const { data: { data, count } = {}, isPending: isLoading } = useQuery({
    queryFn: () => getWorkoutsAfterDate(date),
    queryKey: ['workouts', `${period}`],
  });

  return { data, isLoading, count, days: periods[period] };
}
