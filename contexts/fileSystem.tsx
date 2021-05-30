import useFileSystemContextState from 'hooks/useFileSystemContextState';
import contextFactory from 'utils/contextFactory';
import { initialFileSystemContextState } from 'utils/initialContextStates';

const { Consumer, Provider, useContext } = contextFactory(
  initialFileSystemContextState,
  useFileSystemContextState
);

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};