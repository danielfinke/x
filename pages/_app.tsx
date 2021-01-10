import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import 'styles/globals.scss';

import Head from 'next/head';
import { description, name } from 'package.json';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
