import { Component, input } from '@angular/core';
import { TitleBlock } from '../../interface/note';

@Component({
  selector: 'app-note-heading',
  imports: [],
  templateUrl: './note-heading.html',
  styleUrl: './note-heading.css',
})
export class NoteHeading {
  block = input<TitleBlock>();
}
