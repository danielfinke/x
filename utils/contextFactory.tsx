import type { Consumer as ConsumerType, FC } from 'react';

import { createContext } from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: ConsumerType<T>;
  Provider: FC;
};

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
