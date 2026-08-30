import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NoteBlock } from '../../interfaces/note';

@Component({
  selector: 'app-note-tip',
  imports: [],
  templateUrl: './note-tip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './note-tip.css',
})
export class NoteTip {
  block = input<NoteBlock>();
}
