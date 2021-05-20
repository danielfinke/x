import type { FC } from 'react';
import type { ProcessContextState } from 'types/contexts/process';

import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState>({ processes: {} });
ProcessContext.displayName = 'ProcessContext';

export const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
