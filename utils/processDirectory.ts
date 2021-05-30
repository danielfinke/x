import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

export type Process = {
  Component: ComponentType;
  hasWindow?: boolean;
  icon: string;
  maximize?: boolean;
  minimize?: boolean;
  title: string;
};

export type Processes = {
  [processId: string]: Process;
};

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: '/favicon.ico',
    title: 'Hello World'
  }
};

export default processDirectory;
