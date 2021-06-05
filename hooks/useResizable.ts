import type { DraggableEventHandler } from 'react-draggable';
import type { RndResizeCallback } from 'react-rnd';

import { useCallback, useState } from 'react';

type Size = {
  height: string;
  width: string;
};

type Position = {
  x: number;
  y: number;
};

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

type DraggableAndResizable = Resizable & Draggable;

const defaultWindowSize = {
  height: '200px',
  width: '250px'
};

const defaultWindowPosition = {
  x: 0,
  y: 0
};

const useDraggableAndResizable = (maximized = false): DraggableAndResizable => {
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const [{ x, y }, setPosition] = useState<Position>(defaultWindowPosition);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    []
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
    []
  );

  return {
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition,
    height: maximized ? '100%' : height,
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useDraggableAndResizable;
