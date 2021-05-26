import type { ProcessContextState } from 'types/contexts/process';

import { useState } from 'react';
import { HelloWorld, Taskbar } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ HelloWorld, Taskbar });

  return { processes };
};

export default useProcessContextState;
