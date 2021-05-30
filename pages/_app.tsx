import type { AppProps } from 'next/app';
import type { FC } from 'react';

import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { FileSystemProvider } from 'contexts/fileSystem';
import { SessionProvider } from 'contexts/session';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <FileSystemProvider>
    <SessionProvider>
      <StyledApp>
        <Metadata />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
