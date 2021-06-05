import type { FC } from 'react';

import useClock from 'hooks/useClock';
import useLocaleDateTime from 'hooks/useLocaleDateTime';
import StyledClock from 'styles/components/system/Taskbar/StyledClock';

const Clock: FC = () => {
  const now = useClock();
  const { date, time, dateTime } = useLocaleDateTime(now);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
