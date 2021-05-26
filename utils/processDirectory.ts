import type { Process } from 'types/contexts/process';

import dynamic from 'next/dynamic';

export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};

export const Taskbar: Process = {
  Component: dynamic(() => import('components/system/Taskbar'))
};
