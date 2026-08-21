import { Component, inject } from '@angular/core';
import type { SideBarItems } from '../../shared/interface/side-bar-items';
import type { FolderNode } from '../../feature/folders/interface/folder-node';
import { RouterLink } from '@angular/router';
import { FolderService } from '../../feature/folders/service/folders-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Folders } from '../../feature/folders/folders';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Folders],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  private folderService = inject(FolderService);
  folderNodes = toSignal(this.folderService.getFolderTree(), { initialValue: [] });
  sidebarItems: SideBarItems[] = [{ id: 1, name: 'Dashboard', link: '/' }];
}
