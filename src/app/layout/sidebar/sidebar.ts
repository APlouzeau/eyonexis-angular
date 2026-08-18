import { Component } from '@angular/core';
import type { SideBarItems } from '../../shared/interface/side-bar-items';
import type { FolderNode } from '../../feature/folders/interface/folder-node';
import { RouterLink } from '@angular/router';
import { Folders } from '../../feature/folders/folders';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Folders],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  folderNodes: FolderNode[] = [
    {
      idFolder: '1',
      folderName: 'PHP',
      children: [],
      notes: [],
    },
    {
      idFolder: '2',
      folderName: 'Rust',
      children: [
        {
          idFolder: '3',
          folderName: 'BorrowChecker',
          children: [
            {
              idFolder: '4',
              folderName: '&',
              children: [],
              notes: [{ id: '1', title: 'Comment ça marche ?' }],
            },
          ],
          notes: [{ id: '1', title: 'une note' }],
        },
      ],
      notes: [],
    },
  ];
  sidebarItems: SideBarItems[] = [{ id: 1, name: 'Dashboard', link: '/' }];
}
