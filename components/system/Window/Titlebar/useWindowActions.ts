import type { MouseEventHandler } from 'react';

import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';

import useNextFocusableId from '../useNextFocusableId';

type WindowActions = {
  onClose: MouseEventHandler;
  onMaximize: MouseEventHandler;
  onMinimize: MouseEventHandler;
};

const useWindowActions = (id: string): WindowActions => {
  const nextFocusableId = useNextFocusableId(id);
  const { setForegroundId, setStackOrder } = useSession();
  const { close, maximize, minimize } = useProcesses();
  const onMinimize = () => {
    minimize(id);
    setForegroundId(nextFocusableId);
  };
  const onMaximize = () => maximize(id);
  const onClose = () => {
    setStackOrder((currentStackOrder) =>
      currentStackOrder.filter((stackId) => stackId !== id)
    );
    close(id);
    setForegroundId(nextFocusableId);
  };

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
