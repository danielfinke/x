import type { WallpaperEffect } from 'types/styles/wallpaper';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      taskbar: string;
      window: string;
    };
    fonts: {
      clock: {
        size: string;
      };
    };
    sizes: {
      clock: {
        width: string;
      };
      startButton: {
        width: string;
      };
      taskbar: {
        blur: string;
        entry: {
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
