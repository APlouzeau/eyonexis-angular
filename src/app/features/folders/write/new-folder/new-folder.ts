import { Component, inject, Input } from '@angular/core';
import { FolderService } from '../../services/folders.service';
import { FolderNode } from '../../interfaces/folder-node';

@Component({
  imports: [],
  selector: 'app-new-folder',
  styleUrls: ['./new-folder.css'],
  templateUrl: './new-folder.html',
})
export class NewFolder {
  private folderService = inject(FolderService);
  @Input() folder!: FolderNode;
}
