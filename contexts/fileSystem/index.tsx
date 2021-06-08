import contextFactory from 'contexts/contextFactory';
import useFileSystemContextState from 'contexts/fileSystem/useFileSystemContextState';
import { initialFileSystemContextState } from 'contexts/initialContextStates';

const { Consumer, Provider, useContext } = contextFactory(
  initialFileSystemContextState,
  useFileSystemContextState
);

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};
