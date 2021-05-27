import type { FC } from 'react';

import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

const Home: FC = () => (
  <Desktop>
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
