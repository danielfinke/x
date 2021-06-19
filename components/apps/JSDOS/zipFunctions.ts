import type { FSModule } from 'browserfs/dist/node/core/FS';

import JSZip from 'jszip';

export const addFileToZip = (
  buffer: Buffer,
  filePath: string,
  zipFilePath: string,
  fs: FSModule
): Promise<Buffer> =>
  new Promise((resolve) =>
    new JSZip()
      .loadAsync(buffer)
      .then((zipFile) =>
        fs.readFile(filePath, (_error, contents = Buffer.from('')) =>
          zipFile
            .file(zipFilePath, contents)
            .generateAsync({ type: 'nodebuffer' })
            .then(resolve)
        )
      )
  );

export const isFileInZip = async (
  buffer: Buffer,
  zipFilePath: string
): Promise<boolean> => {
  const zipFile = await new JSZip().loadAsync(buffer);
  return Object.keys(zipFile.files).includes(zipFilePath);
};
