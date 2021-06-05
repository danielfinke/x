import type { FC } from 'react';

import { CloseIcon, MaximizeIcon, MinimizeIcon } from 'components/system/Icons';
import { useProcesses } from 'contexts/process';
import Button from 'styles/common/Button';
import StyledTitlebar from 'styles/components/system/Window/StyledTitlebar';

type TitlebarProps = {
  id: string;
};

const Titlebar: FC<TitlebarProps> = ({ id }) => {
  const {
    close,
    maximize,
    minimize,
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();
  const onMinimize = () => minimize(id);
  const onMaximize = () => maximize(id);
  const onClose = () => close(id);

  return (
    <StyledTitlebar className="handle">
      <h1>
        <figure>
          <img src={icon} alt={title} draggable={false} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
