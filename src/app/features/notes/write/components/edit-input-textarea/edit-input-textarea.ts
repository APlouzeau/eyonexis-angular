import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-edit-input-textarea',
  styleUrl: './edit-input-textarea.css',
  templateUrl: './edit-input-textarea.html',
})
export class EditInputTextarea {
  for = input.required<string>();
  label = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  value = input<string>('');
}
