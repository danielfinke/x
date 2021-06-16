import type { Size } from 'components/system/Window/RndWindow/useResizable';
import type { Dispatch, SetStateAction } from 'react';
import type { Position } from 'react-rnd';

import { useFileSystem } from 'contexts/fileSystem';
import { useEffect, useState } from 'react';

type WindowState = {
  position?: Position;
  size?: Size;
};

type WindowStates = {
  [id: string]: WindowState;
};

type Session = {
  themeName: string;
  windowStates: WindowStates;
};

export type SessionContextState = {
  setThemeName: Dispatch<SetStateAction<string>>;
  setWindowStates: Dispatch<SetStateAction<WindowStates>>;
} & Session;

const SESSION_FILE = '/session.json';

const useSessionContextState = (): SessionContextState => {
  const { fs } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  useEffect(() => {
    if (sessionLoaded) {
      fs?.writeFile(
        SESSION_FILE,
        JSON.stringify({
          themeName,
          windowStates
        })
      );
    }
  }, [fs, sessionLoaded, themeName, windowStates]);

  useEffect(
    () =>
      fs?.readFile(SESSION_FILE, (error, contents) => {
        if (contents) {
          const session: Session = JSON.parse(contents.toString());

          setThemeName(session.themeName);
          setWindowStates(session.windowStates);
        }

        setSessionLoaded(true);
      }),
    [fs]
  );

  return { setThemeName, setWindowStates, themeName, windowStates };
};

export default useSessionContextState;
