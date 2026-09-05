import { Injectable, Service } from '@angular/core';
import { FolderNode } from '../../../../features/folders/interfaces/folder-node';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FoldersStoreService {
  folders = signal<FolderNode[]>([]);
}
