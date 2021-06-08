import type { FC } from 'react';

import Clock from 'components/system/Taskbar/Clock';
import StartButton from 'components/system/Taskbar/StartButton';
import StyledTaskbar from 'components/system/Taskbar/StyledTaskbar';
import TaskbarEntries from 'components/system/Taskbar/TaskbarEntries';

const Taskbar: FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
