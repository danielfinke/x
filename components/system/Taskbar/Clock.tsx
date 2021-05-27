import type { FC } from 'react';

import { useEffect, useState } from 'react';
import StyledClock from 'styles/components/system/Taskbar/StyledClock';

const Clock: FC = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(() => setTime(new Date()), 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <StyledClock dateTime={time.toISOString()}>
      {time.toLocaleTimeString()}
    </StyledClock>
  );
};

export default Clock;
