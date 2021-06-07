import type { FC } from 'react';

import Head from 'next/head';
import packageJson from 'package.json';

const { description, name } = packageJson;

const Metadata: FC = () => (
  <Head>
    <meta name="description" content={description} />
    <title>{name}</title>
  </Head>
);

export default Metadata;
