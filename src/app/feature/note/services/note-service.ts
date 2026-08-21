import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteContent } from '../interface/note';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/folder-tree`; // à remplacer

  getNotes(): Observable<NoteContent[]> {
    let result = this.http.get<NoteContent[]>(this.apiUrl);
    console.log(result);
    return result;
  }

  getNotesById(id: string): Observable<NoteContent> {
    return this.http.get<NoteContent>(`${this.apiUrl}/${id}`);
  }
}
