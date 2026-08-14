import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  protected readonly copyright = signal('copyright @Eyonexis');
}
