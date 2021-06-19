import type { ReactEventHandler } from 'react';

import { basename, dirname, normalize } from 'path';
import styled from 'styled-components';
import { cleanUpBufferUrl } from 'utils/functions';

const onError =
  (fallbackSrc: string): ReactEventHandler<HTMLImageElement> =>
  ({ currentTarget }) => {
    const img = currentTarget;
    img.src = fallbackSrc;
  };

const onLoad: ReactEventHandler<HTMLImageElement> = ({ target }) => {
  const img = target as HTMLImageElement;

  img.style.setProperty('visibility', 'visible');

  if (img.src.startsWith('blob:')) cleanUpBufferUrl(img.src);
};

type ImageProps = { $size: number };

const Image = styled.img.attrs<ImageProps>(({ $size, src = '' }) => {
  let realSrc = src;

  if (src && !src.startsWith('blob:')) {
    realSrc = normalize(`${dirname(src)}/${$size}x${$size}/${basename(src)}`);
  }

  return {
    draggable: false,
    height: `${$size}px`,
    onError: onError(src),
    onLoad,
    src: realSrc,
    width: `${$size}px`
  };
})<ImageProps>`
  visibility: hidden;
`;

export default Image;
