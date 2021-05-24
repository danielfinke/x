import type { Processes } from 'types/contexts/process';

import dynamic from 'next/dynamic';

const STARTUP_PROCESSES = ['HelloWorld'];

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce((acc: Processes, id) => {
    const process = processDirectory[id];

    if (process) {
      acc[id] = processDirectory[id];
    }

    return acc;
  }, {});

export default getStartupProcesses;
