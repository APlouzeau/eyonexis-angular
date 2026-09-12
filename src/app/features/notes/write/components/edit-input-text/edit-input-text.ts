import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-edit-input-text',
  styleUrls: ['./edit-input.css'],
  templateUrl: './edit-input-text.html',
})
export class EditInputText {
  for = input.required<string>();
  label = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  value = input<string>('');
}
