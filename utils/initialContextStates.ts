import type { SessionContextState } from 'types/contexts/session';

export const initialProcessContextState = {
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
