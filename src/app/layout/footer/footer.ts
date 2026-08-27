import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer.css'],
})
export class Footer {
  protected readonly copyright = signal('copyright @Eyonexis');
}
