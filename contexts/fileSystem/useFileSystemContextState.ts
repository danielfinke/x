import type { FSModule } from 'browserfs/dist/node/core/FS';

import { BFSRequire, configure } from 'browserfs';
import FileSystemConfig from 'contexts/fileSystem/FileSystemConfig';
import { useEffect, useState } from 'react';

export type FileSystemContextState = {
  fs?: FSModule;
};

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule>();

  useEffect(() => {
    if (!fs) {
      configure(FileSystemConfig, () => setFs(BFSRequire('fs')));
    }
  }, [fs]);

  return { fs };
};

export default useFileSystemContextState;
