import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  protected readonly title = signal('Eyonexis');
}
