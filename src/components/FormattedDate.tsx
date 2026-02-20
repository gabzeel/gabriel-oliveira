import type { ReactElement } from 'react';

type Props = {
  date: Date;
};

export default function FormattedDate({ date }: Props): ReactElement {
  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
}
