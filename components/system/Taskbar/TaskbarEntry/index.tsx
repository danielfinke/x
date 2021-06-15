import type { FC } from 'react';

import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import TaskbarEntryButton from 'components/system/Taskbar/TaskbarEntry/TaskbarEntryButton';
import { useProcesses } from 'contexts/process';
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
  const { minimize } = useProcesses();
  const onClick = () => minimize(id);

  return (
    <StyledTaskbarEntry>
      <TaskbarEntryButton onClick={onClick}>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </TaskbarEntryButton>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;