import type { Consumer as ConsumerType, FC } from 'react';

import { createContext, useContext } from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: ConsumerType<T>;
  Provider: FC;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);

  const CustomProvider: FC = ({ children }) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Consumer: Context.Consumer,
    Provider: CustomProvider,
    useContext: () => useContext(Context)
  };
};

export default contextFactory;
