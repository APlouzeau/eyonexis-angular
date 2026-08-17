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
