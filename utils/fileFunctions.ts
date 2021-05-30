import type { FSModule } from 'browserfs/dist/node/core/FS';

import { parse } from 'ini';

type Shortcut = {
  URL: string;
  IconFile: string;
};

export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve) =>
    fs.readFile(path, (_error, contents = Buffer.from('')) =>
      resolve(parse(contents.toString()) as Shortcut)
    )
  );

export const getProcessByFileExtension = (_extension: string): string => '';
