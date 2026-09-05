import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FolderReadService } from '../folders/read/services/folders.service';
import { FoldersWriteService } from './services/folder-write/folders.write.service';
import { NoteWriteService } from './services/note-write/note.write.service';
import { FolderNode } from '../folders/interfaces/folder-node';
import { FolderList } from './folder-list/folder-list';
import { Button } from '../../shared/components/button/button';
import { FormsModule } from '@angular/forms';
import { FoldersStoreService } from '../../shared/services/store/folders-store/folders.store.service';

@Component({
  imports: [FolderList, Button, FormsModule],
  selector: 'app-new-entry',
  styleUrls: ['./new-entry.css'],
  templateUrl: './new-entry.html',
})
export class NewEntry {
  private folderReadService = inject(FolderReadService);
  private foldersWriteService = inject(FoldersWriteService);
  private foldersStore = inject(FoldersStoreService);
  private noteWriteService = inject(NoteWriteService);
  private router = inject(Router);

  expanded = signal(false);
  newName = signal('');
  selectedParent = signal<FolderNode | null>(null);
  @Input() depth = 0;
  folders = this.foldersStore.folders;

  ngOnInit() {
    this.folderReadService.getFolderTree().subscribe({
      next: (data) => this.foldersStore.folders.set(data),
      error: (err) => console.error('Erreur chargement dossiers', err),
    });
  }

  toggle() {
    const willExpand = !this.expanded();
    this.expanded.set(willExpand);
  }

  selectParent(folder: FolderNode) {
    this.selectedParent.set(folder);
  }

  createFolder() {
    const folderName = this.newName().trim();
    const parentId = this.selectedParent();
    if (!folderName) {
      console.warn('Le nom du dossier est vide');
      return;
    }
    this.foldersWriteService.createNewFolder(folderName, parentId?.idFolder ?? null).subscribe({
      next: () => {
        this.newName.set('');
        this.folderReadService.getFolderTree().subscribe({
          next: (data) => this.foldersStore.folders.set(data),
          error: (err) => console.error('Erreur rechargement arbre', err),
        });
      },
      error: (err) => console.error('Erreur création dossier', err),
    });
  }

  createNote() {
    const idFolder = this.selectedParent();
    const noteTitle = this.newName().trim();
    if (!noteTitle) {
      console.warn('Le nom de la note est vide');
      return;
    } else if (!idFolder) {
      console.warn('Aucun dossier sélectionné');
      return;
    }
    this.noteWriteService
      .createNewNote({
        title: noteTitle,
        idFolder: idFolder.idFolder,
      })
      .subscribe({
        next: (noteId) => {
          this.newName.set('');
          this.router.navigate(['/note', noteId]);
        },
        error: (err) => console.error('Erreur création note', err),
      });
  }
}
