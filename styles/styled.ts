import type { WallpaperEffect } from 'types/styles/wallpaper';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      clockText: string;
      highlight: string;
      primary: string;
      taskbar: {
        background: string;
        entry: {
          text: string;
        };
        hover: string;
      };
      window: string;
    };
    formats: {
      date: Intl.DateTimeFormatOptions;
      time: Intl.DateTimeFormatOptions;
    };
    sizes: {
      clock: {
        fontSize: string;
        width: string;
      };
      startButton: {
        iconSize: string;
        width: string;
      };
      taskbar: {
        blur: string;
        entry: {
          borderSize: string;
          fontSize: string;
          icon: {
            margin: string;
            size: string;
          };
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
