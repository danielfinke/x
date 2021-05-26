import type { WallpaperEffect } from 'types/styles/wallpaper';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      window: string;
    };
    sizes: {
      clock: {
        width: string;
      };
      startButton: {
        width: string;
      };
      taskbar: {
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
