import 'styles/globals.scss';

import { AppProps } from 'next/app';
import { ReactElement } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
