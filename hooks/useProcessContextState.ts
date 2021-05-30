import type { Process, Processes } from 'utils/processDirectory';

import { useCallback, useState } from 'react';
import { closeProcess, openProcess } from 'utils/processFunctions';

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (processId: string) => void;
  open: (processId: string) => void;
  mapProcesses: ProcessesMap;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = (processId: string) => setProcesses(closeProcess(processId));
  const open = (processId: string) => setProcesses(openProcess(processId));

  return { close, open, mapProcesses };
};

export default useProcessContextState;
