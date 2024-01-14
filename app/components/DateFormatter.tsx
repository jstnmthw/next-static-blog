import classNames from 'classnames/dedupe';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
  className?: string;
};

const DateFormatter = ({ dateString, className }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className={classNames(className)} dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

export default DateFormatter;
