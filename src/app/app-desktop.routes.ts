import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { Note } from './features/notes/read/note';
import { NewEntry } from './features/new-entry/new-entry';
import { EditNote } from './features/notes/write/edit-note';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'nouvelle-entrée', component: NewEntry },
  { path: 'edit/:id', component: EditNote },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
  { path: 'note/:id', component: Note },
  { path: '**', redirectTo: 'dashboard' },
];
