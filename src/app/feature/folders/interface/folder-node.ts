import { NoteSummary } from '../../note/interface/note';

export interface FolderNode {
  idFolder: string;
  folderName: string;
  children: FolderNode[];
  notes: NoteSummary[];
}
