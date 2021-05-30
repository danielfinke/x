import type { Processes } from 'types/contexts/process';

import processDirectory from 'utils/processDirectory';

export const closeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes => {
    const remainingProcesses = { ...currentProcesses };
    delete remainingProcesses[processId];
    return remainingProcesses;
  };

export const openProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [processId]: processDirectory[processId]
        };
