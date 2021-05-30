import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return (
    <StyledWindow minimized={minimized}>
      <Titlebar id={id} />
      {children}
    </StyledWindow>
  );
};

export default Window;
