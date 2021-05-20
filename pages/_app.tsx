import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
