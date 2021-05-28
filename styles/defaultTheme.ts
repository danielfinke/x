import type { DefaultTheme } from 'styled-components';

import vantaWaves from 'utils/vantaWaves';

type Formats = {
  date: Intl.DateTimeFormatOptions;
  time: Intl.DateTimeFormatOptions;
};

const OPAQUE_WHITE = 'rgba(255, 255, 255, 80%)';

const colors = {
  background: '#000',
  clockText: OPAQUE_WHITE,
  highlight: '#76b9ed',
  startButton: '#fff',
  taskbar: {
    background: 'rgba(0, 0, 0, 60%)',
    entry: {
      text: OPAQUE_WHITE
    }
  },
  primary: '#000',
  window: '#808080'
};

const formats: Formats = {
  date: {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  time: {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
};

const sizes = {
  clock: {
    fontSize: '12px',
    width: '76px'
  },
  startButton: {
    iconSize: '19px',
    width: '36px'
  },
  taskbar: {
    blur: '5px',
    entry: {
      borderSize: '2px',
      fontSize: '12px',
      icon: {
        margin: '5px',
        size: '16px'
      },
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

const defaultTheme: DefaultTheme = { colors, formats, sizes, wallpaper };

export default defaultTheme;
