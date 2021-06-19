import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import FileManager from 'components/system/Files/FileManager';
import { useProcesses } from 'contexts/process';
import { useEffect } from 'react';

const FileExplorer: FC<ProcessComponentProps> = ({ id }) => {
  const {
    title,
    processes: {
      [id]: { url }
    }
  } = useProcesses();
  const path = url || '/';

  useEffect(() => title(id, path), [id, path, title]);

  return <FileManager directory={url || '/'} />;
};

export default FileExplorer;
