import { Component, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class Button {
  label = input('Click me');
  @Input() color: 'primary' | 'accent' | 'tertiary' = 'primary';
}
