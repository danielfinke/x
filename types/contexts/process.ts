import type { ComponentType } from 'react';

export type Process = {
  Component: ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
