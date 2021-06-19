import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

export type Process = {
  autoSizing?: boolean;
  backgroundColor?: string;
  Component: ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  url?: string;
};

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic<ProcessComponentProps>(
      () => import('components/apps/HelloWorld')
    ),
    hasWindow: true,
    icon: '/favicon.ico',
    title: 'Hello World'
  },
  V86: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic<ProcessComponentProps>(
      // eslint-disable-next-line import/no-cycle
      () => import('components/apps/V86')
    ),
    hasWindow: true,
    icon: '/icons/v86.png',
    title: 'v86'
  }
};

export default processDirectory;
