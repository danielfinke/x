import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import pkg from 'package.json';
import themes from 'styles/themes.json';

const { description, name } = pkg;

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata description={description} title={name} />
      <SessionProvider>
        <StyledApp currentTheme={themes.default}>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
