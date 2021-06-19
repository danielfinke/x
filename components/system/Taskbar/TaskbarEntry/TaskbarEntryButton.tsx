import type { FC, MouseEventHandler, Ref } from 'react';

import StyledTaskbarEntryButton from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntryButton';
import { forwardRef } from 'react';

type TaskbarEntryButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  ref: Ref<HTMLButtonElement>;
};

const TaskbarEntryButton: FC<TaskbarEntryButtonProps> = forwardRef(
  ({ children, onClick }, ref) => (
    <StyledTaskbarEntryButton ref={ref} onClick={onClick}>
      {children}
    </StyledTaskbarEntryButton>
  )
);
TaskbarEntryButton.displayName = 'TaskbarEntryButton';

export default TaskbarEntryButton;
