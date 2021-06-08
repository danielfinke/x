import { useFileSystem } from 'contexts/fileSystem';
import { useCallback, useEffect, useState } from 'react';

type Files = {
  files: string[];
  getFiles: () => void;
};

const useFiles = (directory: string): Files => {
  const [files, setFiles] = useState<string[]>([]);
  const { fs } = useFileSystem();
  const getFiles = useCallback(
    () => fs?.readdir(directory, (_error, contents = []) => setFiles(contents)),
    [directory, fs]
  );

  useEffect(() => {
    if (fs) {
      fs.readdir(directory, (_error, contents = []) => setFiles(contents));
    }
  }, [directory, fs]);

  return {
    files,
    getFiles
  };
};

export default useFiles;
