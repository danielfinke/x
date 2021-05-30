import type { Dispatch, SetStateAction } from 'react';
import type themes from 'styles/themes';

import { useState } from 'react';

export type SessionContextState = {
  themeName: keyof typeof themes;
  setThemeName: Dispatch<SetStateAction<string>>;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');

  return { themeName, setThemeName };
};

export default useSessionContextState;
