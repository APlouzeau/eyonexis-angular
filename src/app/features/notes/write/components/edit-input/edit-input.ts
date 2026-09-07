import { Component, input } from '@angular/core';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  imports: [Button],
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
}
