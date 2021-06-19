import type { V86, V86Starter } from 'components/apps/V86/types';
import type { MutableRefObject } from 'react';

import {
  BOOT_CD_FD_HD,
  BOOT_FD_CD_HD,
  config as v86Config
} from 'components/apps/V86/config';
import useTitle from 'components/system/Window/useTitle';
import { useFileSystem } from 'contexts/fileSystem';
import { extname } from 'path';
import { useCallback, useEffect, useState } from 'react';
import { bufferToUrl, cleanUpBufferUrl, loadFiles } from 'utils/functions';

const useV86 = (
  id: string,
  url: string,
  screenContainer: MutableRefObject<HTMLDivElement | null>
): V86 => {
  const { appendFileToTitle } = useTitle(id);
  const [emulator, setEmulator] = useState<V86Starter | null>(null);
  const lockMouse = useCallback(() => emulator?.lock_mouse?.(), [emulator]);
  const { fs } = useFileSystem();

  useEffect(() => {
    if (!emulator && fs && url && screenContainer.current) {
      fs?.readFile(url, (_error, contents = Buffer.from('')) => {
        loadFiles(['/libs/v86/libv86.js']).then(() => {
          const isISO = extname(url).toLowerCase() === '.iso';
          const { deviceMemory = 8 } = navigator;
          const memoryRatio = deviceMemory / 8;
          const bufferUrl = bufferToUrl(contents);
          const v86 = new window.V86Starter({
            memory_size: memoryRatio * 1024 ** 3,
            vga_memory_size: memoryRatio * 32 * 1024 ** 2,
            boot_order: isISO ? BOOT_CD_FD_HD : BOOT_FD_CD_HD,
            [isISO ? 'cdrom' : 'fda']: {
              async: false,
              size: contents.length,
              url: bufferUrl,
              use_parts: false
            },
            screen_container: screenContainer.current,
            ...v86Config
          });

          v86.add_listener('emulator-loaded', () => {
            appendFileToTitle.current?.(url);
            cleanUpBufferUrl(bufferUrl);
          });

          setEmulator(v86);
        });
      });
    }

    return () => emulator?.destroy?.();
  }, [appendFileToTitle, emulator, fs, screenContainer, url]);

  return {
    emulator,
    lockMouse
  };
};

export default useV86;
