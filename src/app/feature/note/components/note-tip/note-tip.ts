import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NoteBlock } from '../../interface/note';

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
