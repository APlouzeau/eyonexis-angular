import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { CodeBlock } from '../../interface/note';
import Prism from 'prismjs';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-note-code',
  imports: [],
  templateUrl: './note-code.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './note-code.css',
})
export class NoteCode {
  block = input.required<CodeBlock>();
  html = computed(() =>
    Prism.highlight(
      this.block().content,
      Prism.languages[this.block().metadata.language],
      this.block().metadata.language,
    ),
  );
}
