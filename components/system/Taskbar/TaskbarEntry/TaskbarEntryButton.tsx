import type { FC, MouseEventHandler, Ref } from 'react';

import StyledTaskbarEntryButton from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntryButton';
import { forwardRef } from 'react';

type TaskbarEntryButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  ref: Ref<HTMLButtonElement>;
  title: string;
};

const TaskbarEntryButton: FC<TaskbarEntryButtonProps> = forwardRef(
  ({ children, onClick, title }, ref) => (
    <StyledTaskbarEntryButton ref={ref} onClick={onClick} title={title}>
      {children}
    </StyledTaskbarEntryButton>
  )
);
TaskbarEntryButton.displayName = 'TaskbarEntryButton';

export default TaskbarEntryButton;
