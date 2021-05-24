import type { FC } from 'react';
import type { SessionContextState } from 'types/contexts/session';

import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';
import { initialSessionContextState } from 'utils/initialContextStates';

const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);
SessionContext.displayName = 'SessionContext';

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
