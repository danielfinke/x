import type { FC } from 'react';
import type { ProcessContextState } from 'types/contexts/process';

import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import { initialProcessContextState } from 'utils/initialContextStates';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);
ProcessContext.displayName = 'ProcessContext';

export const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
