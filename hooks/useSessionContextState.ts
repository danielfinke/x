import type { Size } from 'hooks/useResizable';
import type { Dispatch, SetStateAction } from 'react';
import type { Position } from 'react-rnd';
import type themes from 'styles/themes';

import { useState } from 'react';

type WindowState = {
  position?: Position;
  size: Size;
};

type WindowStates = {
  [id: string]: WindowState;
};

export type SessionContextState = {
  setThemeName: Dispatch<SetStateAction<string>>;
  setWindowStates: Dispatch<SetStateAction<WindowStates>>;
  themeName: keyof typeof themes;
  windowStates: WindowStates;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  return { setThemeName, setWindowStates, themeName, windowStates };
};

export default useSessionContextState;
