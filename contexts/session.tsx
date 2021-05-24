import type { FC } from 'react';
import type { SessionContextState } from 'types/contexts/session';

import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';
import { initialSessionContextState } from 'utils/initialContextStates';

const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);
SessionContext.displayName = 'SessionContext';

const { Consumer, Provider } = SessionContext;

export const SessionProvider: FC = ({ children }) => (
  <Provider value={useSessionContextState()}>{children}</Provider>
);

export const SessionConsumer = Consumer;
