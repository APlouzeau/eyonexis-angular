import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  protected readonly title = signal('Eyonexis');
}
