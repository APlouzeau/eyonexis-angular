import { Component, inject, Input, signal } from '@angular/core';
import { FolderNode } from '../../../interfaces/folder-node';
import { FolderService } from '../../../read/services/folders.service';

@Component({
  imports: [],
  selector: 'app-folder-list',
  styleUrls: ['./folder-list.css'],
  templateUrl: './folder-list.html',
})
export class FolderList {
  @Input() folder!: FolderNode;
  @Input() depth = 0;
  @Input() isSelected = false;
  @Input() selectedParentId: string | null = null;
  @Input() selectParent?: (folder: FolderNode) => void;

  expanded = signal(false);

  toggle() {
    this.expanded.set(!this.expanded());
  }
}
