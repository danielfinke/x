import type { ReactEventHandler } from 'react';

import styled from 'styled-components';
import { cleanUpBufferUrl } from 'utils/functions';

const onLoad: ReactEventHandler<HTMLImageElement> = ({ target }) => {
  const img = target as HTMLImageElement;
  if (img.src.startsWith('blob:')) cleanUpBufferUrl(img.src);
};

const Image = styled.img.attrs({
  draggable: false,
  onLoad
})``;

export default Image;
