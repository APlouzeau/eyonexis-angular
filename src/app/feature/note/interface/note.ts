export interface NoteContent {
  id: string;
  title: string;
  content: string;
  folderId: string | null;
}

export interface NoteSummary {
  id: string;
  title: string;
}

export interface FolderNode {
  id: string;
  folderName: string;
  children: FolderNode[];
  notes: NoteSummary[];
}
