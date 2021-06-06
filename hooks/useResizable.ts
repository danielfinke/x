import type { Dispatch, SetStateAction } from 'react';
import type { Props } from 'react-rnd';

import { useState } from 'react';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, Dispatch<SetStateAction<Size>>];

const useResizable = (maximized = false): Resizable => {
  const [{ height, width }, setSize] = useState(DEFAULT_WINDOW_SIZE);

  return [
    { height: maximized ? 0 : height, width: maximized ? 0 : width },
    setSize
  ];
};

export default useResizable;
