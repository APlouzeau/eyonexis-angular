import { Routes } from '@angular/router';
import { Dashboard } from './feature/dashboard/dashboard';
import { About } from './feature/about/about';
import { Note } from './feature/note/note';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
  { path: 'note/:id', component: Note },
  { path: '**', redirectTo: 'dashboard' },
];
