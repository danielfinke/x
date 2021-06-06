import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';

import { useCallback } from 'react';
import rndDefaults from 'utils/rndDefaults';

import useDraggable from './useDraggable';
import useResizable from './useResizable';

const useRnd = (maximized = false): Props => {
  const [size, setSize] = useResizable();
  const [position, setPosition] = useDraggable();
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
