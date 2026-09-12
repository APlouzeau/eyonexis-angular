import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-edit-input',
  styleUrls: ['./edit-input.css'],
  templateUrl: './edit-input.html',
})
export class EditInput {
  for = input.required<string>();
  label = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  type = input.required<string>();
  value = input<string>('');
}
