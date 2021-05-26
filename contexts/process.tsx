import type { FC } from 'react';
import type { ProcessContextState } from 'types/contexts/process';

import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import { initialProcessContextState } from 'utils/initialContextStates';

const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);
ProcessContext.displayName = 'ProcessContext';

const { Consumer, Provider } = ProcessContext;

export const ProcessProvider: FC = ({ children }) => (
  <Provider value={useProcessContextState()}>{children}</Provider>
);

export const ProcessConsumer = Consumer;
