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

  getNote(idFolder: string): Observable<NoteContent> {
    let result = this.http.get<NoteContent>(`${this.apiUrl}/note/${idFolder}`);
    console.log(result);
    return result;
  }

  getNotesByFolderId(idFolder: string): Observable<NoteSummary[]> {
    let result = this.http.get<NoteSummary[]>(`${this.apiUrl}/notes/${idFolder}`);
    console.log(result);
    return result;
  }
}
