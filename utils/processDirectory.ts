import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

export type Process = {
  Component: ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
};

export type Processes = {
  [processId: string]: Process;
};

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic<ProcessComponentProps>(
      () => import('components/apps/HelloWorld')
    ),
    hasWindow: true,
    icon: '/favicon.ico',
    title: 'Hello World'
  }
};

export default processDirectory;
