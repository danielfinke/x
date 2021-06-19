import type { FC } from 'react';

import useDoubleClick from 'components/system/useDoubleClick';
import StyledTitlebar from 'components/system/Window/Titlebar/StyledTitlebar';
import useWindowActions from 'components/system/Window/Titlebar/useWindowActions';
import {
  CloseIcon,
  MaximizedIcon,
  MaximizeIcon,
  MinimizeIcon
} from 'components/system/Window/Titlebar/WindowActionIcons';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type TitlebarProps = {
  id: string;
};

const Titlebar: FC<TitlebarProps> = ({ id }) => {
  const {
    processes: {
      [id]: { autoSizing, icon, title, maximized }
    }
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize, onMinimize } = useWindowActions(id);

  return (
    <StyledTitlebar className="handle" foreground={isForeground}>
      <h1 onClick={useDoubleClick(autoSizing ? () => undefined : onMaximize)}>
        <figure>
          <Image
            src={icon}
            alt={title}
            onClick={useDoubleClick(onClose)}
            $size={16}
          />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button className="minimize" onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button className="maximize" onClick={onMaximize} disabled={autoSizing}>
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
