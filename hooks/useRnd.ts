import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';

import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import rndDefaults from 'utils/rndDefaults';

import useDraggable from './useDraggable';
import useResizable from './useResizable';

const useRnd = (id: string, maximized = false): Props => {
  const {
    windowStates: { [id]: windowState }
  } = useSession();
  const { position: previousPosition, size: previousSize } = windowState || {};
  const [size, setSize] = useResizable(maximized, previousSize);
  const [position, setPosition] = useDraggable(maximized, previousPosition);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    [setPosition]
  );
  const updateSize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    [setPosition, setSize]
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized,
    onDragStop: updatePosition,
    onResizeStop: updateSize,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
