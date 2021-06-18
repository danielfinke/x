import type { ReactEventHandler } from 'react';

import styled from 'styled-components';
import { cleanupBufferUrl } from 'utils/functions';

const onLoad: ReactEventHandler<HTMLImageElement> = ({ target }) => {
  const img = target as HTMLImageElement;
  if (img.src.startsWith('blob:')) cleanupBufferUrl(img.src);
};

const Image = styled.img.attrs({
  draggable: false,
  onLoad
})``;

export default Image;
