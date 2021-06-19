import type { MouseEventHandler } from 'react';

import { useCallback, useRef } from 'react';

type DoubleClick = (
  handler: MouseEventHandler,
  timeout?: number
) => MouseEventHandler;

const useDoubleClick: DoubleClick = (handler, timeout = 500) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const onClick = useCallback<MouseEventHandler>(
    (event) => {
      if (!timer.current) {
        timer.current = setTimeout(() => {
          timer.current = null;
        }, timeout);
      } else {
        clearTimeout(timer.current);
        event.stopPropagation();
        handler(event);
        timer.current = null;
      }
    },
    [handler, timeout]
  );

  return onClick;
};

export default useDoubleClick;
