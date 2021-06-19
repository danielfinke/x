import type { FC } from 'react';

import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import TaskbarEntryButton from 'components/system/Taskbar/TaskbarEntry/TaskbarEntryButton';
import useNextFocusableId from 'components/system/Window/useNextFocusableId';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Image from 'styles/common/Image';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry: FC<TaskbarEntryProps> = ({
  icon = 'favicon.ico',
  id,
  title = 'Hello World'
}) => {
  const nextFocusableId = useNextFocusableId(id);
  const { foregroundId, setForegroundId } = useSession();
  const isForeground = id === foregroundId;
  const {
    linkElement,
    minimize,
    processes: {
      [id]: { minimized, taskbarEntry }
    }
  } = useProcesses();
  const linkTaskbarEntry = useCallback(
    (newTaskbarEntry: HTMLButtonElement) =>
      newTaskbarEntry &&
      taskbarEntry !== newTaskbarEntry &&
      linkElement(id, 'taskbarEntry', newTaskbarEntry),
    [id, linkElement, taskbarEntry]
  );
  const onClick = useCallback(() => {
    if (minimized || isForeground) {
      minimize(id);
    }

    setForegroundId(isForeground ? nextFocusableId : id);
  }, [id, isForeground, minimize, minimized, nextFocusableId, setForegroundId]);

  return (
    <StyledTaskbarEntry foreground={isForeground}>
      <TaskbarEntryButton onClick={onClick} ref={linkTaskbarEntry}>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </TaskbarEntryButton>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
