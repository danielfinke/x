import type { FC } from 'react';

import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import { ProcessConsumer } from 'contexts/process';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes)
          .filter(([, { hasWindow }]) => hasWindow)
          .map(([id, { icon, title }]) => (
            <TaskbarEntry key={id} icon={icon} title={title} />
          ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
