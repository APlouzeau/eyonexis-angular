export interface NoteContent {
  id: string;
  title: string;
  subtitle: string;
  folderId: string | null;
  slug: string;
  blocks: NoteBlock[];
  created_at: string;
  updated_at: string;
}

export interface NoteSummary {
  id: string;
  title: string;
}

export interface TitleBlock {
  type: 'heading';
  content: string;
}

export interface TextBlock {
  type: 'text';
  content: string;
}
export interface CodeBlock {
  type: 'code';
  language: string;
  content: string;
}
export interface TipBlock {
  type: 'tip';
  title: string;
  content: string;
  level: TipVariant;
}

type TipVariant = 'warning' | 'memo' | 'tips';

export type NoteBlock = TitleBlock | TextBlock | CodeBlock | TipBlock;
