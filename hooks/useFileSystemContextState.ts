import type { FSModule } from 'browserfs/dist/node/core/FS';
import type { FileSystemContextState } from 'types/contexts/fileSystem';

import * as BrowserFS from 'browserfs';
import { useEffect, useState } from 'react';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule>();

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'IndexedDb'
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, []);

  return { fs };
};

export default useFileSystemContextState;
