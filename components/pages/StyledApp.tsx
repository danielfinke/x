import type { FC } from 'react';

import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';

const StyledApp: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ themeName }) => (
        <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
          {children}
        </ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
