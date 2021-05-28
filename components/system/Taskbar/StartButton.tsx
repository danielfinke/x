import type { FC } from 'react';

import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProcessConsumer } from 'contexts/process';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

const StartButton: FC = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <FontAwesomeIcon icon={faWindows} />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
