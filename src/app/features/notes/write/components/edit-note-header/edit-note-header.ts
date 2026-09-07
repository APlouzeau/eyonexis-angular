import { Component } from '@angular/core';
import { EditInput } from '../edit-input/edit-input';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  imports: [Button, EditInput],
  selector: 'app-edit-note-header',
  styleUrls: ['./edit-note-header.css'],
  templateUrl: './edit-note-header.html',
})
export class EditNoteHeader {}
