import type { ProcessContextState, Processes } from 'types/contexts/process';

import { useState } from 'react';
import { closeProcess, openProcess } from 'utils/processFunctions';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const close = (id: string) => setProcesses(closeProcess(id));
  const open = (id: string) => setProcesses(openProcess(id));

  return { close, open, processes };
};

export default useProcessContextState;
