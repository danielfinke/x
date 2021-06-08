import processDirectory from 'contexts/process/directory';

const {
  initialFileSystemContextState,
  initialProcessContextState,
  initialSessionContextState
} = jest.requireActual('../../utils/initialContextStates');

const mockedInitialProcessContextState = {
  ...initialProcessContextState,
  processes: {
    HelloWorld: processDirectory.HelloWorld
  }
};

export {
  initialFileSystemContextState,
  mockedInitialProcessContextState as initialProcessContextState,
  initialSessionContextState
};
