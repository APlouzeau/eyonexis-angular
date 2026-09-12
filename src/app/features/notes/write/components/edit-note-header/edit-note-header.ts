import { Component, input } from '@angular/core';
import { EditInput } from '../edit-input/edit-input';
import { NoteContent } from '../../../interfaces/note';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [EditInput, JsonPipe],
  selector: 'app-edit-note-header',
  styleUrls: ['./edit-note-header.css'],
  templateUrl: './edit-note-header.html',
})
export class EditNoteHeader {
  note = input<NoteContent>();
}
