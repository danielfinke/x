import type { ProcessContextState, Processes } from 'types/contexts/process';

import { useState } from 'react';
import { HelloWorld } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ HelloWorld });

  return { processes };
};

export default useProcessContextState;
