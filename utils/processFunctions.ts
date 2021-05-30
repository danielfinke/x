import type { Processes } from 'utils/processDirectory';

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

const toggleProcessSetting =
  (processId: string, setting: 'maximize' | 'minimize') =>
  (currentProcesses: Processes): Processes => {
    const process = currentProcesses[processId];

    if (process) {
      return {
        ...currentProcesses,
        [processId]: {
          ...process,
          [setting]: !process[setting]
        }
      };
    }

    return currentProcesses;
  };

export const maximizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'maximize')(processes);

export const minimizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'minimize')(processes);
