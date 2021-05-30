import type { Processes } from 'types/contexts/process';

import processDirectory from 'utils/processDirectory';

export const closeProcess =
  (pid: string) =>
  (currentProcesses: Processes): Processes => {
    const remainingProcesses = { ...currentProcesses };
    delete remainingProcesses[pid];
    return remainingProcesses;
  };

export const openProcess =
  (pid: string) =>
  (currentProcesses: Processes): Processes =>
    currentProcesses[pid] || !processDirectory[pid]
      ? currentProcesses
      : {
          ...currentProcesses,
          [pid]: processDirectory[pid]
        };
