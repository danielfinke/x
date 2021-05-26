import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/styles/wallpaper';

import * as THREE from 'three';
/* @ts-expect-error Vanta has no declaration file */
import WAVES from 'vanta/dist/vanta.waves.min';

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (desktopRef) => {
    const vantaEffect = isWebGLAvailable
      ? WAVES({
          el: desktopRef.current,
          THREE,
          ...disableControls,
          ...settings
        })
      : null;

    return () => vantaEffect?.destroy();
  };

export default vantaWaves;
