import type { FSModule } from 'browserfs/dist/node/core/FS';
import type { FileSystemContextState } from 'types/contexts/fileSystem';

import { BFSRequire, configure } from 'browserfs';
import { useEffect, useState } from 'react';
import FileSystemConfig from 'utils/FileSystemConfig';

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
