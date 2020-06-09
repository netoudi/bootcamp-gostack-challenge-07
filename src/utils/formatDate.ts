import * as fns from 'date-fns';

const formatDate = (date: string, format: string): string => {
  return fns.format(fns.parseISO(date), format);
};

export default formatDate;
