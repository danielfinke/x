import type { MouseEventHandler } from 'react';

import { useProcesses } from 'contexts/process';

type WindowActions = {
  onClose: MouseEventHandler;
  onMaximize: MouseEventHandler;
  onMinimize: MouseEventHandler;
};

const useWindowActions = (id: string): WindowActions => {
  const { close, maximize, minimize } = useProcesses();
  const onMinimize = () => minimize(id);
  const onMaximize = () => maximize(id);
  const onClose = () => close(id);

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
