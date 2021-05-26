import contextFactory from 'contexts/contextFactory';
import useProcessContextState from 'hooks/useProcessContextState';
import { initialProcessContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = contextFactory(
  initialProcessContextState,
  useProcessContextState
);

export { Consumer as ProcessConsumer, Provider as ProcessProvider };
