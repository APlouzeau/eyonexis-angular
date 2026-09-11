import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteContent, NoteSummary } from '../interfaces/note';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}`; // à remplacer

  getNote(urlSlug: string): Observable<NoteContent> {
    console.log(urlSlug);
    let result = this.http.get<NoteContent>(`${this.apiUrl}/notes/show/${urlSlug}`);
    return result;
  }

  getNotesByFolderId(idFolder: string): Observable<NoteSummary[]> {
    return this.http.get<NoteSummary[]>(`${this.apiUrl}/notes/get-folder-content/${idFolder}`);
  }
}
