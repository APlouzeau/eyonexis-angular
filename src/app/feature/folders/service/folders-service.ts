import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FolderNode } from '../interface/folder-node';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FolderService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/folder-tree`; // à remplacer

  getFolderTree(): Observable<FolderNode[]> {
    let result = this.http.get<FolderNode[]>(this.apiUrl);
    return result;
  }
}
