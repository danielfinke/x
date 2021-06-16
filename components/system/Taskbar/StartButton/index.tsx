import type { FC } from 'react';

import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';
import WindowsIcon from 'components/system/Taskbar/StartButton/WindowsIcon';
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
