import { Component } from '@angular/core';
import { EditNoteHeader } from './components/edit-note-header/edit-note-header';
import { EditTextBloc } from './components/edit-text-bloc/edit-text-bloc';

@Component({
  imports: [EditNoteHeader, EditTextBloc],
  selector: 'app-edit-note',
  styleUrls: ['./edit-note.css'],
  templateUrl: './edit-note.html',
})
export class EditNote {}
