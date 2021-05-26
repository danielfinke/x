import type { RefObject } from 'react';

import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

const useWallpaper = (desktopRef: RefObject<HTMLElement>): void => {
  const { wallpaper } = useContext(ThemeContext);

  useEffect(() => wallpaper?.(desktopRef), [desktopRef, wallpaper]);
};

export default useWallpaper;
