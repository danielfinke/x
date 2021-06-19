import type { FC } from 'react';

import useFileInfo from 'components/system/Files/FileEntry/useFileInfo';
import useDoubleClick from 'components/system/useDoubleClick';
import { useProcesses } from 'contexts/process';
import { createPid } from 'contexts/process/functions';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry: FC<FileEntryProps> = ({ name, path }) => {
  const { icon, pid, url } = useFileInfo(path);
  const { setForegroundId } = useSession();
  const { open, processes } = useProcesses();
  const onClick = useCallback(() => {
    const id = createPid(pid, url);
    if (processes[id]) {
      setForegroundId(id);
    } else {
      open(pid, url);
    }
  }, [open, pid, processes, setForegroundId, url]);

  return (
    <Button title={name} onClick={useDoubleClick(onClick)}>
      <figure>
        <Image src={icon} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Button>
  );
};

export default FileEntry;
