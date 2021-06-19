import type { WallpaperEffect } from 'styles/styled';

import colorCycle from 'components/system/Desktop/wallpapers/colorCycle';
import * as THREE from 'three';
/* @ts-expect-error Vanta has no declaration file */
import WAVES from 'vanta/dist/vanta.waves.min';

type VantaWavesSettings = {
  color: number;
  shininess: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (element) => {
    const vantaEffect = isWebGLAvailable
      ? WAVES({
          el: element,
          THREE,
          ...disableControls,
          ...settings
        })
      : null;

    if (vantaEffect) {
      const { onDestroy } = colorCycle(settings.color, (color: number) =>
        vantaEffect.setOptions({ color })
      );

      vantaEffect.onDestroy = onDestroy;
    }

    return () => vantaEffect?.destroy();
  };

export default vantaWaves;
