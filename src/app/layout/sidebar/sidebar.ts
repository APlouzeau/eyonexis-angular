import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import type { SideBarItems } from '../../shared/interfaces/side-bar-items';
import type { FolderNode } from '../../features/folders/interfaces/folder-node';
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
  private folderReadService = inject(FolderReadService);
  folderNodes = toSignal(this.folderReadService.getFolderTree(), { initialValue: [] });
  sidebarItems: SideBarItems[] = [{ id: 1, name: 'Dashboard', link: '/' }];
}
