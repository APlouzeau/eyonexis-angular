import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { Note } from './features/notes/note';
import { NewEntry } from './features/new-entry/new-entry';
import { NewNote } from './features/notes/write/new-note/new-note';
import { FolderCreation } from './features/folders/write/folder-creation';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'nouvelle-entrée', component: NewEntry },
  { path: 'nouveau-dossier', component: FolderCreation },
  { path: 'nouvelle-note', component: NewNote },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
  { path: 'note/:id', component: Note },
  { path: '**', redirectTo: 'dashboard' },
];
