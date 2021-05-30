import type { ComponentType } from 'react';

export type Process = {
  Component: ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type Processes = {
  [processId: string]: Process;
};

export type ProcessContextState = {
  close: (processId: string) => void;
  open: (processId: string) => void;
  mapProcesses: ProcessesMap;
};
