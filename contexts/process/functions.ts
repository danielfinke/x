import type {
  Process,
  ProcessElements,
  Processes,
  ProcessToggles
} from 'contexts/process/directory';

import processDirectory from 'contexts/process/directory';

export const closeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes => {
    const remainingProcesses = { ...currentProcesses };
    delete remainingProcesses[processId];
    return remainingProcesses;
  };

export const createPid = (processId: string, url: string): string =>
  url ? `${processId}_${url}` : processId;

export const openProcess =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes => {
    const id = createPid(processId, url);

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

export const setProcessSettings =
  (processId: string, settings: Partial<Process>) =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId] = {
      ...newProcesses[processId],
      ...settings
    };

    return newProcesses;
  };

const toggleProcessSetting =
  (processId: string, setting: keyof ProcessToggles) =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId][setting] = !newProcesses[processId][setting];

    return newProcesses;
  };

export const maximizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(currentProcesses);

export const minimizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(currentProcesses);

export const setProcessElement =
  (processId: string, name: keyof ProcessElements, element: HTMLElement) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { [name]: element })(currentProcesses);
