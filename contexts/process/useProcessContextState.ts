import type {
  Process,
  ProcessElements,
  Processes
} from 'contexts/process/directory';

import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess,
  setProcessElement,
  setTitle
} from 'contexts/process/functions';
import { useCallback, useState } from 'react';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (processId: string) => void;
  linkElement: (
    id: string,
    name: keyof ProcessElements,
    element: HTMLElement
  ) => void;
  mapProcesses: ProcessesMap;
  maximize: (processId: string) => void;
  minimize: (processId: string) => void;
  open: (processId: string, url: string) => void;
  processes: Processes;
  title: (id: string, newTitle: string) => void;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = (processId: string) => setProcesses(closeProcess(processId));
  const maximize = (processId: string) =>
    setProcesses(maximizeProcess(processId));
  const minimize = (processId: string) =>
    setProcesses(minimizeProcess(processId));
  const open = (processId: string, url: string) =>
    setProcesses(openProcess(processId, url));
  const linkElement = (
    id: string,
    name: keyof ProcessElements,
    element: HTMLElement
  ) => setProcesses(setProcessElement(id, name, element));
  const title = useCallback(
    (id: string, newTitle: string) => setProcesses(setTitle(id, newTitle)),
    []
  );

  return {
    close,
    linkElement,
    mapProcesses,
    maximize,
    minimize,
    open,
    processes,
    title
  };
};

export default useProcessContextState;
