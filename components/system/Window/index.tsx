import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useRnd from 'hooks/useRnd';
import { Rnd } from 'react-rnd';
import StyledWindow from 'styles/components/system/Window/StyledWindow';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const rndProps = useRnd(maximized);

  return (
    <Rnd {...rndProps}>
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
