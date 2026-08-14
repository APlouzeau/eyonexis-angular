import { Injectable } from '@angular/core';
import { NoteContent } from '../interface/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: NoteContent[] = [
    {
      id: '1',
      title: 'Sample Note',
      content: 'This is a sample note.',
      folderId: null,
    },
    {
      id: '2',
      title: 'Another Note',
      content: 'This is another note.',
      folderId: null,
    },
    {
      id: '3',
      title: 'Third Note',
      content: 'This is the third note.',
      folderId: null,
    },
  ];

  getNotesById(id: string): NoteContent | undefined {
    return this.notes.find((note) => note.id === id);
  }
}
