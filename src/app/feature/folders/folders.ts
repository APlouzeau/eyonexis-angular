import { Component, inject, input, Input, signal } from '@angular/core';
import { FolderNode } from './interface/folder-node';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NoteService } from '../note/services/note-service';
import { NoteSummary } from '../note/interface/note';

@Component({
  selector: 'app-folders',
  imports: [RouterLink, Folders],
  templateUrl: './folders.html',
  styleUrls: ['./folders.css'],
})
export class Folders {
  private noteService = inject(NoteService);
  @Input() folder!: FolderNode;
  @Input() depth = 0;
  expanded = signal(false);
  notes = signal<NoteSummary[]>([]);
  loading = signal(false);

  toggle() {
    const willExpand = !this.expanded();
    this.expanded.set(willExpand);

    if (willExpand && this.notes().length === 0) {
      this.loading.set(true);
      this.noteService.getNotesById(this.folder.idFolder).subscribe({
        next: (data) => this.notes.set(data),
        error: (err) => console.error('Erreur chargement notes', err),
        complete: () => this.loading.set(false)

      })
    }
  }


}
