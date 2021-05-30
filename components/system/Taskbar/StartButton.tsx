import type { FC } from 'react';

import { WindowsIcon } from 'components/system/Icons';
import { ProcessConsumer } from 'contexts/process';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

const StartButton: FC = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <WindowsIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
