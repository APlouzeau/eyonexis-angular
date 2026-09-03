import {
  Component,
  DestroyRef,
  inject,
  input,
  Input,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FolderNode } from '../interfaces/folder-node';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NoteService } from '../../notes/services/note.service';
import { NoteSummary } from '../../notes/interfaces/note';

@Component({
  selector: 'app-folders',
  imports: [RouterLink, Folders],
  templateUrl: './folders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./folders.css'],
})
export class Folders {
  private noteService = inject(NoteService);
  private destroyRef = inject(DestroyRef);
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
      this.noteService
        .getNotesByFolderId(this.folder.idFolder)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (data) => this.notes.set(data),
          error: (err) => console.error('Erreur chargement notes', err),
          complete: () => this.loading.set(false),
        });
    }
  }
}
