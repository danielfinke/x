import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

import Head from 'next/head';
import pkg from 'package.json';

const { description: packageDescription, name: packageName } = pkg;

const Metadata: FC<MetadataProps> = ({
  description = packageDescription,
  title = packageName
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default Metadata;
