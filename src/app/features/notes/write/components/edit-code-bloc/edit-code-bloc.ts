import { Component, input } from '@angular/core';
import { CodeBlock } from '../../../interfaces/note';
import { EditInputTextarea } from '../edit-input-textarea/edit-input-textarea';

@Component({
  imports: [EditInputTextarea],
  selector: 'app-edit-code-bloc',
  styleUrl: './edit-code-bloc.css',
  templateUrl: './edit-code-bloc.html',
})
export class EditCodeBloc {
  block = input<CodeBlock>();
}
