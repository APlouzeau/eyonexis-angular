import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { Note } from './features/notes/note';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
  { path: 'note/:id', component: Note },
  { path: '**', redirectTo: 'dashboard' },
];
