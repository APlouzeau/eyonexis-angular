import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TextBlock } from '../../interfaces/note';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-note-text',
  imports: [MarkdownComponent],
  templateUrl: './note-text.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './note-text.css',
})
export class NoteText {
  block = input<TextBlock>();
}
