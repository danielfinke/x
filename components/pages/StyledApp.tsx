import type { FC } from 'react';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import defaultTheme from 'styles/themes.json';

const StyledApp: FC<StyledAppProps> = ({ children, theme = defaultTheme }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default StyledApp;
