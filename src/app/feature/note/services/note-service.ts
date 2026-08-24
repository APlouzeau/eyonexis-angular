import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteContent, NoteSummary } from '../interface/note';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}`; // à remplacer

  getNotes(): Observable<NoteContent[]> {
    let result = this.http.get<NoteContent[]>(this.apiUrl);
    console.log(result);
    return result;
  }

  getNotesById(id: string): Observable<NoteSummary[]> {
    let result = this.http.get<NoteSummary[]>(`${this.apiUrl}/notes/${id}`);
    return result;
  }
}
