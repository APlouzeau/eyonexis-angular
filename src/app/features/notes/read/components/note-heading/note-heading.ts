import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TitleBlock } from '../../../interfaces/note';

@Component({
  selector: 'app-note-heading',
  imports: [],
  templateUrl: './note-heading.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './note-heading.css',
})
export class NoteHeading {
  block = input<TitleBlock>();
}
