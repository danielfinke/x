import type { FC } from 'react';

import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
    <TaskbarEntry />
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
