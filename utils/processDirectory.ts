import type { Process } from 'types/contexts/process';

import dynamic from 'next/dynamic';

// eslint-disable-next-line import/prefer-default-export
export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};
