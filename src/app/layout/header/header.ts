import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal } from '@angular/core';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.css'],
})
export class Header {
  protected readonly title = signal('Eyonexis');
}
