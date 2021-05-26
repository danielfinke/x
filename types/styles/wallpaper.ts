import type { RefObject } from 'react';

export type VantaWavesSettings = {
  color: number;
  shininess: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

export type WallpaperEffect = (
  desktopRef: RefObject<HTMLElement>
) => () => void;
