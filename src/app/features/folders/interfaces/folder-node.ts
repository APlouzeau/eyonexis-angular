import { NoteSummary } from '../../notes/interfaces/note';

export interface FolderNode {
  idFolder: string;
  folderName: string;
  children: FolderNode[];
}
