import { Component, input } from '@angular/core';
import { TextBlock } from '../../interface/note';

@Component({
  selector: 'app-note-text',
  imports: [],
  templateUrl: './note-text.html',
  styleUrl: './note-text.css',
})
export class NoteText {
  block = input<TextBlock>();
}
