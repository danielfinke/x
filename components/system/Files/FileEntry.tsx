import type { FC } from 'react';

import { useProcesses } from 'contexts/process';
import useFileInfo from 'hooks/useFileInfo';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import StyledFileEntry from 'styles/components/system/Files/StyledFileEntry';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry: FC<FileEntryProps> = ({ name, path }) => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onActivate = useCallback(() => open(pid), [open, pid]);

  return (
    <StyledFileEntry>
      <Button title={name} onClick={onActivate} onKeyDown={onActivate}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;