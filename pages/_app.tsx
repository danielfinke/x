import type { AppProps } from 'next/app';
import type { FC } from 'react';

import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider>
    <StyledApp>
      <Metadata />
      <Component {...pageProps} />
    </StyledApp>
  </SessionProvider>
);

export default App;
