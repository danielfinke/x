import type { ComponentType, FC } from 'react';

import dynamic from 'next/dynamic';

const Window = dynamic(() => import('components/system/Window'));

type RenderProcessProps = {
  Component: ComponentType;
  hasWindow?: boolean;
};

const RenderProcess: FC<RenderProcessProps> = ({
  Component,
  hasWindow = false
}) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

export default RenderProcess;
