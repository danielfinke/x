import { stripUnit as polishedStripUnit } from 'polished';

export const loadScript = (src: string, callback: () => void): void => {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callback?.();

  document.head.appendChild(script);
};

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(new Blob([buffer]));

export const stripUnit = (value: string): number =>
  Number(polishedStripUnit(value));
