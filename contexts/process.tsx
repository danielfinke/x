import type { FC } from 'react';
import type { Processes } from 'types/utils/processDirectory';

import { createContext, useState } from 'react';
import processDirectory from 'utils/processDirectory';

type ProcessContextState = {
  processes: Processes;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });
ProcessContext.displayName = 'ProcessContext';

export const ProcessProvider: FC = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
