import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Searchbar } from './layout/searchbar/searchbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Footer, Searchbar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('eyonexis-angular');
}
