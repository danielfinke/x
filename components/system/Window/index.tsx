import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';

import RndWindow from './RndWindow';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { backgroundColor, minimized }
    }
  } = useProcesses();

  return (
    <RndWindow id={id}>
      <StyledWindow minimized={minimized} style={{ backgroundColor }}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
