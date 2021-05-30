import type { ComponentType, FC } from 'react';

import dynamic from 'next/dynamic';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: ComponentType) => (
  <Window>
    <Component />
  </Window>
);

type RenderProcessProps = {
  Component: ComponentType;
  hasWindow: boolean;
};

const RenderProcess: FC<RenderProcessProps> = ({ Component, hasWindow }) =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;
