import type { RefObject } from 'react';

import { useEffect } from 'react';
import { useTheme } from 'styled-components';

const useWallpaper = (desktopRef: RefObject<HTMLElement>): void => {
  const { wallpaper } = useTheme();

  useEffect(() => wallpaper?.(desktopRef.current), [desktopRef, wallpaper]);
};

export default useWallpaper;
