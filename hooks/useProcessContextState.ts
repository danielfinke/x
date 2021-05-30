import type { Process, Processes } from 'utils/processDirectory';

import { useCallback, useState } from 'react';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'utils/processFunctions';

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (processId: string) => void;
  open: (processId: string) => void;
  mapProcesses: ProcessesMap;
  maximize: (processId: string) => void;
  minimize: (processId: string) => void;
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
  const open = (processId: string) => setProcesses(openProcess(processId));

  return { close, open, mapProcesses, maximize, minimize };
};

export default useProcessContextState;
