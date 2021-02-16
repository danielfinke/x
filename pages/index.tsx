import type { ReactElement } from 'react';

import WindowManager from 'components/system/WindowManager';
import { ProcessProvider } from 'contexts/process';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
