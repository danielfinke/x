import type { RefObject } from 'react';

import { useProcesses } from 'contexts/process';
import processDirectory from 'contexts/process/directory';
import { basename } from 'path';
import { useRef } from 'react';
import { PROCESS_DELIMITER } from 'utils/constants';

type AppendFileToTitleFunction = (url: string) => void;

type Title = {
  appendFileToTitle: RefObject<AppendFileToTitleFunction>;
};

const useTitle = (id: string): Title => {
  const { title } = useProcesses();
  const [pid] = id.split(PROCESS_DELIMITER) || [];
  const { title: originalTitle } = processDirectory[pid] || {};
  const appendFileToTitle = useRef<AppendFileToTitleFunction | null>(null);

  appendFileToTitle.current = (url: string) =>
    title(id, `${originalTitle} - ${basename(url)}`);

  return {
    appendFileToTitle
  };
};

export default useTitle;
