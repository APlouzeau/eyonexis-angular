import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHeaderService } from '../../../../shared/services/api/api-header/api.header.service';
import { environment } from '../../../../../environments/environment.development';
import { FolderNode } from '../../../folders/interfaces/folder-node';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoldersWriteService {
  private apiHeaderService = inject(ApiHeaderService);
  private http = inject(HttpClient);
  private folderCreateUrl = `${environment.apiUrl}/folders/create`;
  private folderContentUrl = `${environment.apiUrl}/folders/folder-content`;

  getFolderContent(): Observable<FolderNode> {
    let result = this.http.get<FolderNode>(`${this.folderContentUrl}`);
    return result;
  }

  createNewFolder(folderName: string, parentId: string | null) {
    const headers = this.apiHeaderService.buildHeaders();
    return this.http.post(`${this.folderCreateUrl}`, { folderName, parentId }, { headers });
  }
}
