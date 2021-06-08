import type { FC } from 'react';

import { WindowsIcon } from 'components/system/Icons';
import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';
import { ProcessConsumer } from 'contexts/process';

const StartButton: FC = () => (
  <ProcessConsumer>
    {() => (
      <StyledStartButton>
        <WindowsIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
