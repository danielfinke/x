import type { FC } from 'react';

import RenderProcess from 'components/system/Processes/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess
          key={id}
          Component={Component}
          hasWindow={hasWindow}
          id={id}
        />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
