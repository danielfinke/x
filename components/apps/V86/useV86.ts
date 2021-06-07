import type { V86, V86Starter } from 'components/apps/V86/types';
import type { MutableRefObject } from 'react';

import {
  BOOT_CD_FD_HD,
  BOOT_FD_CD_HD,
  config as v86Config
} from 'components/apps/V86/config';
import { useFileSystem } from 'contexts/fileSystem';
import { extname } from 'path';
import { useCallback, useEffect, useState } from 'react';
import { bufferToUrl, loadScript } from 'utils/fileFunctions';

const useV86 = (
  url: string,
  screenContainer: MutableRefObject<HTMLDivElement | null>
): V86 => {
  const [emulator, setEmulator] = useState<V86Starter | null>(null);
  const lockMouse = useCallback(() => emulator?.lock_mouse?.(), [emulator]);
  const { fs } = useFileSystem();

  useEffect(() => {
    if (!emulator) {
      fs?.readFile(url, (_error, contents = Buffer.from('')) => {
        loadScript('/libs/v86/libv86.js', () => {
          const isISO = extname(url).toLowerCase() === '.iso';
          const { deviceMemory = 8 } = navigator;
          const memoryRatio = deviceMemory / 8;

          setEmulator(
            new window.V86Starter({
              memory_size: memoryRatio * 1024 ** 3,
              vga_memory_size: memoryRatio * 32 * 1024 ** 2,
              boot_order: isISO ? BOOT_CD_FD_HD : BOOT_FD_CD_HD,
              [isISO ? 'cdrom' : 'fda']: { url: bufferToUrl(contents) },
              screen_container: screenContainer.current,
              ...v86Config
            })
          );
        });
      });
    }

    return () => emulator?.destroy?.();
  }, [emulator, fs, screenContainer, url]);

  return {
    emulator,
    lockMouse
  };
};

export default useV86;