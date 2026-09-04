import { Component, inject, Input, signal } from '@angular/core';
import { FolderReadService } from '../read/services/folders.service';
import { FolderWriteService } from '../write/services/folders.service';
import { FolderNode } from '../interfaces/folder-node';
import { toSignal } from '@angular/core/rxjs-interop';
import { FolderList } from './components/folder-list/folder-list';
import { Button } from '../../../shared/components/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FolderList, Button, FormsModule],
  selector: 'app-folder-creation',
  styleUrls: ['./folder-creation.css'],
  templateUrl: './folder-creation.html',
})
export class FolderCreation {
  private folderReadService = inject(FolderReadService);
  private folderWriteService = inject(FolderWriteService);
  expanded = signal(false);
  newFolderName = signal('');
  selectedParent = signal<FolderNode | null>(null);
  @Input() depth = 0;
  folders = signal<FolderNode[]>([]);

  ngOnInit() {
    this.folderReadService.getFolderTree().subscribe({
      next: (data) => this.folders.set(data),
      error: (err) => console.error('Erreur chargement dossiers', err),
    });
  }

  toggle() {
    const willExpand = !this.expanded();
    this.expanded.set(willExpand);
  }

  selectParent(folder: FolderNode) {
    this.selectedParent.set(folder);
    console.log('Parent sélectionné :', folder.folderName);
  }

  createFolder() {
    const folderName = this.newFolderName().trim();
    const parentId = this.selectedParent();
    if (!folderName) {
      console.warn('Le nom du dossier est vide');
      return;
    }
    this.folderWriteService.createNewFolder(folderName, parentId?.idFolder ?? null).subscribe({
      next: () => {
        console.log('Dossier créé avec succès');
        this.newFolderName.set('');
      },
      error: (err) => console.error('Erreur création dossier', err),
    });
  }
}
