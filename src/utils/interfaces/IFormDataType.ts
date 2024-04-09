import type { FileType } from './IFileType';

export interface FormDataType {
  append(name: string, value: string | number | Blob | FileType, fileName?: string): void;
}
