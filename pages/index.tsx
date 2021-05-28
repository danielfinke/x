import type { FC } from 'react';

import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'contexts/process';

const Home: FC = () => (
  <Desktop>
    <ProcessProvider>
      <Taskbar />
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
