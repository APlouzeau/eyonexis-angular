import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { FolderNode } from '../../interfaces/folder-node';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoldersService {
  private http = inject(HttpClient);
  private folderCreateUrl = `${environment.apiUrl}/create`;
  private folderContentUrl = `${environment.apiUrl}/folder-content`;

  getFolderContent(): Observable<FolderNode> {
    let result = this.http.get<FolderNode>(`${this.folderContentUrl}`);
    return result;
  }
}
