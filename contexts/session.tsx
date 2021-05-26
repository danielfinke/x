import contextFactory from 'contexts/contextFactory';
import useSessionContextState from 'hooks/useSessionContextState';
import { initialSessionContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = contextFactory(
  initialSessionContextState,
  useSessionContextState
);

export { Consumer as SessionConsumer, Provider as SessionProvider };
