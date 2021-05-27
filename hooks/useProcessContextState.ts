import type { ProcessContextState, Processes } from 'types/contexts/process';

import { useState } from 'react';
import { HelloWorld, Taskbar } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ HelloWorld, Taskbar });

  return { processes };
};

export default useProcessContextState;
