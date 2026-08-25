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
  block_type: 'Text';
  content: string;
}
export interface CodeBlock {
  block_type: 'Code';
  metadata: CodeMetadata;
  content: string;
}
export interface TipBlock {
  block_type: 'Tip';
  title: string;
  content: string;
  level: TipVariant;
}

export interface ListBlock {
  block_type: 'List';
  content: string;
}

interface CodeMetadata {
  language: string;
}
type TipVariant = 'warning' | 'memo' | 'tips';

export type NoteBlock = TitleBlock | TextBlock | CodeBlock | TipBlock | ListBlock;
