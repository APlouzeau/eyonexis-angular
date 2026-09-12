import { Component, input } from '@angular/core';
import { EditInputText } from '../edit-input-text/edit-input-text';
import { NoteContent } from '../../../interfaces/note';
import { EditInputTextarea } from '../edit-input-textarea/edit-input-textarea';

@Component({
  imports: [EditInputText, EditInputTextarea],
  selector: 'app-edit-note-header',
  styleUrls: ['./edit-note-header.css'],
  templateUrl: './edit-note-header.html',
})
export class EditNoteHeader {
  note = input<NoteContent>();
}
