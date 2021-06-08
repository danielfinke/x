import contextFactory from 'contexts/contextFactory';
import { initialFileSystemContextState } from 'contexts/initialContextStates';
import useFileSystemContextState from 'hooks/useFileSystemContextState';

const { Consumer, Provider, useContext } = contextFactory(
  initialFileSystemContextState,
  useFileSystemContextState
);

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};
