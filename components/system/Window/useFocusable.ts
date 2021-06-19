import type { FocusEvent, RefObject } from 'react';

import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback, useEffect } from 'react';

type Focusable = {
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onFocus: (event: FocusEvent<HTMLElement>) => void;
  tabIndex: number;
  zIndex: number;
};

const useFocusable = (
  id: string,
  windowRef: RefObject<HTMLElement>
): Focusable => {
  const { foregroundId, setForegroundId, setStackOrder, stackOrder } =
    useSession();
  const zIndex = stackOrder.length - stackOrder.indexOf(id) + 1;
  const isForeground = id === foregroundId;
  const {
    processes: {
      [id]: { taskbarEntry }
    }
  } = useProcesses();
  const onBlur = useCallback(
    ({ relatedTarget }) => {
      if (isForeground && relatedTarget !== taskbarEntry) setForegroundId('');
    },
    [isForeground, setForegroundId, taskbarEntry]
  );
  const moveToFront = useCallback(() => {
    setStackOrder((currentStackOrder) => [
      id,
      ...currentStackOrder.filter((stackId) => stackId !== id)
    ]);
    setForegroundId(id);
    windowRef.current?.focus();
  }, [id, setForegroundId, setStackOrder, windowRef]);

  useEffect(moveToFront, [moveToFront]);

  useEffect(() => {
    if (isForeground) moveToFront();
  }, [isForeground, moveToFront]);

  return {
    onBlur,
    onFocus: moveToFront,
    tabIndex: -1,
    zIndex
  };
};

export default useFocusable;
