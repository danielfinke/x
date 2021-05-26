import type { FC } from 'react';

import Head from 'next/head';
import pkg from 'package.json';

const { description, name: title } = pkg;

const Metadata: FC = () => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default Metadata;
