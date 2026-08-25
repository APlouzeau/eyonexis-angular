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
  block_type: 'Heading';
  content: string;
}

export interface TextBlock {
  block_type: 'text';
  content: string;
}
export interface CodeBlock {
  block_type: 'code';
  language: string;
  content: string;
}
export interface TipBlock {
  block_type: 'tip';
  title: string;
  content: string;
  level: TipVariant;
}

type TipVariant = 'warning' | 'memo' | 'tips';

export type NoteBlock = TitleBlock | TextBlock | CodeBlock | TipBlock;
