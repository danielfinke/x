import type { Process, Processes } from 'contexts/process/directory';

import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'contexts/process/functions';
import { useCallback, useState } from 'react';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (processId: string) => void;
  open: (processId: string, url: string) => void;
  mapProcesses: ProcessesMap;
  maximize: (processId: string) => void;
  minimize: (processId: string) => void;
  processes: Processes;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = (processId: string) => setProcesses(closeProcess(processId));
  const maximize = (processId: string) =>
    setProcesses(maximizeProcess(processId));
  const minimize = (processId: string) =>
    setProcesses(minimizeProcess(processId));
  const open = (processId: string, url: string) =>
    setProcesses(openProcess(processId, url));

  return { close, open, mapProcesses, maximize, minimize, processes };
};

export default useProcessContextState;
