import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiHeaderService } from '../../../../shared/services/api/api-header/api.header.service';
import { environment } from '../../../../../environments/environment.development';
import { CreateInitNotePayload } from '../../interfaces/notes-payload';

@Injectable({
  providedIn: 'root',
})
export class NoteWriteService {
  private apiHeaderService = inject(ApiHeaderService);
  private http = inject(HttpClient);
  private noteCreateUrl = `${environment.apiUrl}/notes/create`;

  createNewNote(payload: CreateInitNotePayload): Observable<string> {
    const headers = this.apiHeaderService.buildHeaders();
    return this.http.post<string>(this.noteCreateUrl, payload, { headers });
  }
}
