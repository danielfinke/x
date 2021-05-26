import type { Dispatch, SetStateAction } from 'react';
import type themes from 'styles/themes';

export type SessionContextState = {
  themeName: keyof typeof themes;
  setThemeName: Dispatch<SetStateAction<string>>;
};
