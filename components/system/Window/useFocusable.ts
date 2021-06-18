import type { FocusEvent, RefObject } from 'react';

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
  const { setForegroundId, setStackOrder, stackOrder } = useSession();
  const zIndex = stackOrder.length - stackOrder.indexOf(id) + 1;
  const onBlur = useCallback(() => setForegroundId(''), [setForegroundId]);
  const moveToFront = useCallback(() => {
    setStackOrder((currentStackOrder) => [
      id,
      ...currentStackOrder.filter((stackId) => stackId !== id)
    ]);
    setForegroundId(id);
  }, [id, setForegroundId, setStackOrder]);

  useEffect(() => windowRef.current?.focus(), [moveToFront, windowRef]);

  return {
    onBlur,
    onFocus: moveToFront,
    tabIndex: -1,
    zIndex
  };
};

export default useFocusable;
