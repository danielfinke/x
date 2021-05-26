import useSessionContextState from 'hooks/useSessionContextState';
import contextFactory from 'utils/contextFactory';
import { initialSessionContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = contextFactory(
  initialSessionContextState,
  useSessionContextState
);

export { Consumer as SessionConsumer, Provider as SessionProvider };
