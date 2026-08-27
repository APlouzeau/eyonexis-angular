import { Component, input } from '@angular/core';
import { NoteBlock } from '../../interface/note';

@Component({
  selector: 'app-note-tip',
  imports: [],
  templateUrl: './note-tip.html',
  styleUrl: './note-tip.css',
})
export class NoteTip {
  block = input<NoteBlock>();
}
