import { Component, input } from '@angular/core';
import { EditInputTextarea } from '../edit-input-textarea/edit-input-textarea';
import { TextBlock } from '../../../interfaces/note';
import { JsonPipe } from '@angular/common';
@Component({
  imports: [EditInputTextarea, JsonPipe],
  selector: 'app-edit-text-bloc',
  styleUrls: ['./edit-text-bloc.css'],
  templateUrl: './edit-text-bloc.html',
})
export class EditTextBloc {
  block = input<TextBlock>();
}
