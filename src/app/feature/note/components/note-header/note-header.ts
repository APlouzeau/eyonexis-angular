import { DatePipe } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NoteContent } from '../../interface/note';

@Component({
  selector: 'app-note-header',
  imports: [DatePipe],
  templateUrl: './note-header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './note-header.css',
})
export class NoteHeader {
  note = input<NoteContent>();
}
