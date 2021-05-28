import type { FC } from 'react';

import StyledTaskbarEntry from 'styles/components/system/Taskbar/StyledTaskbarEntry';

type TaskbarEntryProps = {
  icon: string;
  title: string;
};

const TaskbarEntry: FC<TaskbarEntryProps> = ({
  icon = 'favicon.ico',
  title = 'Hello World'
}) => {
  return (
    <StyledTaskbarEntry>
      <figure>
        <img src={icon} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
