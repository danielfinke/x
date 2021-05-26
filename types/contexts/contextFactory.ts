import type { Consumer as ConsumerType, FC } from 'react';

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: ConsumerType<T>;
  Provider: FC;
};
