import type { ReactElement } from 'react';

import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
