import type { ComponentType, FC } from 'react';
import type { Process } from 'types/contexts/process';

import dynamic from 'next/dynamic';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: ComponentType) => (
  <Window>
    <Component />
  </Window>
);

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;
