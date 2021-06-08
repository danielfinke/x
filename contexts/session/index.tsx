import contextFactory from 'contexts/contextFactory';
import { initialSessionContextState } from 'contexts/initialContextStates';
import useSessionContextState from 'hooks/useSessionContextState';

const { Consumer, Provider, useContext } = contextFactory(
  initialSessionContextState,
  useSessionContextState
);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
};
