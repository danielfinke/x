import type { DefaultTheme } from 'styled-components';

import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#000',
  taskbar: 'rgba(0, 0, 0, 60%)',
  primary: '#000',
  window: '#808080'
};

const fonts = {
  clock: {
    size: '12px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
    blur: '5px',
    entry: {
      maxWidth: '161px'
    },
    height: '36px'
  }
};

const wallpaper = vantaWaves({
  color: 0x274c,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.3,
  zoom: 0.9
});

const defaultTheme: DefaultTheme = { colors, fonts, sizes, wallpaper };

export default defaultTheme;
