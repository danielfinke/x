import type { FC } from 'react';

import { useEffect, useState } from 'react';
import StyledClock from 'styles/components/system/StyledClock';

const Clock: FC = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(() => setTime(new Date()), 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return <StyledClock>{time.toLocaleTimeString()}</StyledClock>;
};

export default Clock;
