import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import themes from 'styles/themes.json';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <StyledApp currentTheme={themes.default}>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
