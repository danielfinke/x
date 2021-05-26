import type { DefaultTheme } from 'styled-components';
import type { Themes } from 'types/styles/themes';

const themes: Themes = jest.requireActual('../../styles/themes').default;

const defaultTheme: DefaultTheme = { ...themes.defaultTheme };
delete defaultTheme.wallpaper;

const mock = {
  ...themes,
  defaultTheme
};

export default mock;
