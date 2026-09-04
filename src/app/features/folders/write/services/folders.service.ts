import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHeaderService } from '../../../../shared/services/api/api.header.service/api.header.service';
import { environment } from '../../../../../environments/environment.development';
import { FolderNode } from '../../interfaces/folder-node';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FolderWriteService {
  private apiHeaderService = inject(ApiHeaderService);
  private http = inject(HttpClient);
  private folderCreateUrl = `${environment.apiUrl}/create`;
  private folderContentUrl = `${environment.apiUrl}/folder-content`;

  getFolderContent(): Observable<FolderNode> {
    let result = this.http.get<FolderNode>(`${this.folderContentUrl}`);
    return result;
  }

  createNewFolder(folderName: string, parentId: string | null) {
    const headers = this.apiHeaderService.buildHeaders();
    console.log('Headers:', headers);
    return this.http.post(`${this.folderCreateUrl}`, { folderName, parentId }, { headers });
  }
}
