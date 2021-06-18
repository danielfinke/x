import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';

const useNextFocusableId = (id: string): string => {
  const { stackOrder } = useSession();
  const { processes } = useProcesses();

  return (
    stackOrder.find(
      (stackId) => stackId !== id && !processes[stackId]?.minimized
    ) || ''
  );
};

export default useNextFocusableId;
