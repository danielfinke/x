import type { DefaultTheme } from 'styled-components';

import defaultTheme from 'styles/defaultTheme';

export type Themes = {
  [name: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

export default themes;
