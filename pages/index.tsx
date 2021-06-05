import type { FC } from 'react';

import Desktop from 'components/system/Desktop';
import FileManager from 'components/system/Files/FileManager';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'contexts/process';
import StyledDesktopContainer from 'styles/components/system/StyledDesktopContainer';

const Home: FC = () => (
  <Desktop>
    <ProcessProvider>
      <StyledDesktopContainer>
        <FileManager directory="/desktop" />
        <ProcessLoader />
      </StyledDesktopContainer>
      <Taskbar />
    </ProcessProvider>
  </Desktop>
);

export default Home;
