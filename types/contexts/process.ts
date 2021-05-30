import type { ComponentType } from 'react';

export type Process = {
  Component: ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type ProcessMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  close: (id: string) => void;
  open: (id: string) => void;
  mapProcesses: ProcessMap;
};
