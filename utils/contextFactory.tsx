import type { FC } from 'react';
import type { ContextFactory } from 'types/contexts/contextFactory';

import { createContext } from 'react';

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);

  const CustomProvider: FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: CustomProvider };
};

export default contextFactory;
