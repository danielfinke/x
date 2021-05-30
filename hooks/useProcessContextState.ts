import type {
  ProcessContextState,
  Processes,
  ProcessesMap
} from 'types/contexts/process';

import { useCallback, useState } from 'react';
import { closeProcess, openProcess } from 'utils/processFunctions';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = (id: string) => setProcesses(closeProcess(id));
  const open = (id: string) => setProcesses(openProcess(id));

  return { close, open, mapProcesses };
};

export default useProcessContextState;
