import type { ProcessContextState } from 'contexts/process';
import type { Processes } from 'types/contexts/process';

import { useState } from 'react';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  return { processes };
};

export default useProcessContextState;
