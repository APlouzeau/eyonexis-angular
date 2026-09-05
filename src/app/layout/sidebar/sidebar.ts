import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FoldersStoreService } from '../../shared/services/store/folders-store/folders.store.service';
import type { SideBarItems } from '../../shared/interfaces/side-bar-items';
import { RouterLink } from '@angular/router';
import { FolderReadService } from '../../features/folders/read/services/folders.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Folders } from '../../features/folders/read/folders';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Folders],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  private foldersStore = inject(FoldersStoreService);
  private folderReadService = inject(FolderReadService);
  folders = this.foldersStore.folders;
  sidebarItems: SideBarItems[] = [{ id: 1, name: 'Dashboard', link: '/' }];
  ngOnInit() {
    this.folderReadService.getFolderTree().subscribe({
      next: (data) => this.foldersStore.folders.set(data),
      error: (err) => console.error('Erreur chargement dossiers sidebar', err),
    });
  }
}
