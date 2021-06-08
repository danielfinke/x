import type { FC, MouseEventHandler } from 'react';

import StyledTaskbarEntryButton from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntryButton';

type TaskbarEntryButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const TaskbarEntryButton: FC<TaskbarEntryButtonProps> = ({
  children,
  onClick
}) => (
  <StyledTaskbarEntryButton onClick={onClick}>
    {children}
  </StyledTaskbarEntryButton>
);

export default TaskbarEntryButton;
