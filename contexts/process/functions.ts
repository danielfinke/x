import type { Processes } from 'contexts/process/directory';

import processDirectory from 'contexts/process/directory';

export const closeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes => {
    const remainingProcesses = { ...currentProcesses };
    delete remainingProcesses[processId];
    return remainingProcesses;
  };

export const openProcess =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes => {
    const id = url ? `${processId}_${url}` : processId;

    return currentProcesses[id] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processDirectory[processId],
            url
          }
        };
  };

const toggleProcessSetting =
  (processId: string, setting: 'maximized' | 'minimized') =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId][setting] = !newProcesses[processId][setting];

    return newProcesses;
  };

export const maximizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(processes);

export const minimizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(processes);
