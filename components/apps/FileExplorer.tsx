import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import type { FC } from 'react';

import FileManager from 'components/system/Files/FileManager';
import { useProcesses } from 'contexts/process';

const FileExplorer: FC<ProcessComponentProps> = ({ id }) => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();

  return <FileManager directory={url || '/'} />;
};

export default FileExplorer;
