import type { ReactElement } from 'react';

import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import getStartupProcesses from 'utils/processDirectory';

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
