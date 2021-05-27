import type { FC } from 'react';
import type { Processes } from 'types/contexts/process';

import RenderProcess from 'components/system/Processes/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const renderProcesses = (processes: Processes) =>
  Object.entries(processes).map(([id, process]) => (
    <RenderProcess key={id} {...process} />
  ));

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => renderProcesses(processes)}
  </ProcessConsumer>
);

export default ProcessLoader;
