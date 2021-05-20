import type { FC } from 'react';
import type { SessionContextState } from 'types/contexts/session';

import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';

const SessionContext = createContext<SessionContextState>({});
SessionContext.displayName = 'SessionContext';

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
