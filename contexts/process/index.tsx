import contextFactory from 'contexts/contextFactory';
import { initialProcessContextState } from 'contexts/initialContextStates';
import useProcessContextState from 'hooks/useProcessContextState';

const { Consumer, Provider, useContext } = contextFactory(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
