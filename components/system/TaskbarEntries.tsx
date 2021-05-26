import type { FC } from 'react';

import TaskbarEntry from 'components/system/TaskbarEntry';
import StyledTaskbarEntries from 'styles/components/system/StyledTaskbarEntries';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
    <TaskbarEntry />
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
