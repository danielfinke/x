import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

export type ProcessElements = {
  taskbarEntry?: HTMLElement;
};

export type ProcessToggles = {
  maximized?: boolean;
  minimized?: boolean;
};

export type Process = ProcessElements &
  ProcessToggles & {
    autoSizing?: boolean;
    backgroundColor?: string;
    Component: ComponentType<ProcessComponentProps>;
    hasWindow?: boolean;
    icon: string;
    title: string;
    url?: string;
  };

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  FileExplorer: {
    backgroundColor: '#202020',
    Component: dynamic<ProcessComponentProps>(
      // eslint-disable-next-line import/no-cycle
      () => import('components/apps/FileExplorer')
    ),
    hasWindow: true,
    icon: '/icons/explorer.png',
    title: 'File Explorer'
  },
  HelloWorld: {
    Component: dynamic<ProcessComponentProps>(
      () => import('components/apps/HelloWorld')
    ),
    hasWindow: true,
    icon: '/favicon.ico',
    title: 'Hello World'
  },
  JSDOS: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic<ProcessComponentProps>(
      // eslint-disable-next-line import/no-cycle
      () => import('components/apps/JSDOS')
    ),
    hasWindow: true,
    icon: '/icons/jsdos.png',
    title: 'js-dos v7'
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
    title: 'Virtual x86'
  }
};

export default processDirectory;
