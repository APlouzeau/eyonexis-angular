import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FolderNode } from '../../interfaces/folder-node';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FolderService {
  private http = inject(HttpClient);
  private folderTreeUrl = `${environment.apiUrl}/folder-tree`;

  getFolderTree(): Observable<FolderNode[]> {
    let result = this.http.get<FolderNode[]>(this.folderTreeUrl);
    return result;
  }
}
