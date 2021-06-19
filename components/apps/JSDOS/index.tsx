import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import useJSDOS from 'components/apps/JSDOS/useJSDOS';
import { useProcesses } from 'contexts/process';
import { useRef } from 'react';

import StyledJSDos from './StyledJSDos';

const JSDOS: FC<ProcessComponentProps> = ({ id }) => {
  const {
    processes: {
      [id]: { url = '' }
    }
  } = useProcesses();
  const screenRef = useRef<HTMLDivElement>(null);

  useJSDOS(id, url, screenRef);

  return <StyledJSDos ref={screenRef} />;
};

export default JSDOS;
