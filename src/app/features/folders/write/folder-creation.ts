import { Component, inject, Input, signal } from '@angular/core';
import { FolderService } from '../read/services/folders.service';
import { FolderNode } from '../interfaces/folder-node';
import { toSignal } from '@angular/core/rxjs-interop';
import { FolderList } from './components/folder-list/folder-list';
import { Button } from '../../../shared/components/button/button';

@Component({
  imports: [FolderList, Button],
  selector: 'app-folder-creation',
  styleUrl: './folder-creation.css',
  templateUrl: './folder-creation.html',
})
export class FolderCreation {
  private folderService = inject(FolderService);
  expanded = signal(false);
  selectedParent = signal<FolderNode | null>(null);
  @Input() depth = 0;
  folders = signal<FolderNode[]>([]);

  ngOnInit() {
    this.folderService.getFolderTree().subscribe({
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
}
