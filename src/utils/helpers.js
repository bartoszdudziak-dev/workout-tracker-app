import { format } from 'date-fns';

export function formatDate(date) {
  return format(date, 'MM/dd/yyyy');
}
