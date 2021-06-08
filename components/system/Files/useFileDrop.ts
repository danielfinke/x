import type { DragEvent } from 'react';

import { useFileSystem } from 'contexts/fileSystem';
import { useCallback } from 'react';

const haltDragEvent = (event: DragEvent<HTMLElement>): void => {
  event.preventDefault();
  event.stopPropagation();
};

type FileDrop = {
  onDragOver: (event: DragEvent<HTMLElement>) => void;
  onDrop: (event: DragEvent<HTMLElement>) => void;
};

const useFileDrop = (directory: string, getFiles: () => void): FileDrop => {
  const { fs } = useFileSystem();
  const onDrop = useCallback(
    (event: DragEvent<HTMLElement>) => {
      haltDragEvent(event);

      const { files: [file] = [] } = event.dataTransfer || {};
      const reader = new FileReader();

      reader.onload = ({ target }) =>
        fs?.writeFile(
          `${directory}/${file.name}`,
          Buffer.from(target?.result as ArrayBuffer),
          getFiles
        );

      reader.readAsArrayBuffer(file);
    },
    [directory, fs, getFiles]
  );

  return {
    onDragOver: haltDragEvent,
    onDrop
  };
};

export default useFileDrop;
