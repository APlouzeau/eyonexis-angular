import { NoteSummary } from '../../notes/interfaces/note';

export interface FolderNode {
  idFolder: string;
  folderName: string;
  folderSlug: string;
  children: FolderNode[];
}
