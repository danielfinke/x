import type { EventCallback, V86Starter } from 'components/apps/V86/types';
import type { CSSProperties } from 'react';

import useWindowSize from 'components/system/Window/useWindowSize';
import { useCallback, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { stripUnit } from 'utils/functions';

const SET_SCREEN_GFX = 'screen-set-size-graphical';
const SET_SCREEN_TXT = 'screen-set-size-text';

const useV86ScreenSize = (
  id: string,
  emulator: V86Starter | null
): CSSProperties => {
  const {
    sizes: {
      window: { lineHeight }
    }
  } = useTheme();
  const { updateWindowSize } = useWindowSize(id);

  const setScreenGfx = useCallback<EventCallback>(
    ([width, height]) => updateWindowSize(height, width),
    [updateWindowSize]
  );

  const setScreenText = useCallback<EventCallback>(
    ([cols, rows]) =>
      updateWindowSize(
        rows * stripUnit(lineHeight),
        (cols / 2 + 4) * stripUnit(lineHeight)
      ),
    [lineHeight, updateWindowSize]
  );

  useEffect(() => {
    emulator?.add_listener(SET_SCREEN_GFX, setScreenGfx);
    emulator?.add_listener(SET_SCREEN_TXT, setScreenText);

    return () => {
      emulator?.remove_listener(SET_SCREEN_GFX, setScreenGfx);
      emulator?.remove_listener(SET_SCREEN_TXT, setScreenText);
    };
  }, [emulator, setScreenGfx, setScreenText]);

  return {
    font: `${lineHeight} monospace`,
    lineHeight
  };
};

export default useV86ScreenSize;
