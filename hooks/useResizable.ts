import type { Dispatch, SetStateAction } from 'react';
import type { Props } from 'react-rnd';

import { useState } from 'react';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, Dispatch<SetStateAction<Size>>];

const useResizable = (
  maximized = false,
  size = DEFAULT_WINDOW_SIZE
): Resizable => {
  const [{ height, width }, setSize] = useState(size);

  return [
    { height: maximized ? '100%' : height, width: maximized ? '100%' : width },
    setSize
  ];
};

export default useResizable;
