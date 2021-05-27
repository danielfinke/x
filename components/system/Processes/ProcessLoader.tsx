import type { FC } from 'react';
import type { Process } from 'types/contexts/process';

import RenderProcess from 'components/system/Processes/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const renderProcess = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => Object.entries(processes).map(renderProcess)}
  </ProcessConsumer>
);

export default ProcessLoader;
