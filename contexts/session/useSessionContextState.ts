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
  foregroundId: string;
  stackOrder: string[];
  themeName: string;
  windowStates: WindowStates;
};

export type SessionContextState = {
  setForegroundId: Dispatch<SetStateAction<string>>;
  setStackOrder: Dispatch<SetStateAction<string[]>>;
  setThemeName: Dispatch<SetStateAction<string>>;
  setWindowStates: Dispatch<SetStateAction<WindowStates>>;
} & Session;

const SESSION_FILE = '/session.json';

const useSessionContextState = (): SessionContextState => {
  const { fs } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [foregroundId, setForegroundId] = useState('');
  const [stackOrder, setStackOrder] = useState<string[]>([]);
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  useEffect(() => {
    if (sessionLoaded) {
      fs?.writeFile(
        SESSION_FILE,
        JSON.stringify({
          foregroundId,
          stackOrder,
          themeName,
          windowStates
        })
      );
    }
  }, [fs, foregroundId, sessionLoaded, stackOrder, themeName, windowStates]);

  useEffect(
    () =>
      fs?.readFile(SESSION_FILE, (error, contents) => {
        if (contents) {
          try {
            const session: Session = JSON.parse(contents.toString());

            setForegroundId(session.foregroundId);
            setStackOrder(session.stackOrder || []);
            setThemeName(session.themeName);
            setWindowStates(session.windowStates);
          } catch {
            // Couldn't parse session, fall back to defaults
          }
        }

        setSessionLoaded(true);
      }),
    [fs]
  );

  return {
    foregroundId,
    setForegroundId,
    setStackOrder,
    setThemeName,
    setWindowStates,
    stackOrder,
    themeName,
    windowStates
  };
};

export default useSessionContextState;
