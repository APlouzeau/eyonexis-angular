import {
  Component,
  Input,
  OnChanges,
  signal,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { NoteContent, NoteSummary } from '../interfaces/note';
import { NoteService } from '../services/note.service';
import { NoteHeader } from './components/note-header/note-header';
import { NoteHeading } from './components/note-heading/note-heading';
import { NoteText } from './components/note-text/note-text';
import { NoteCode } from './components/note-code/note-code';
import { NoteTip } from './components/note-tip/note-tip';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  imports: [NoteHeader, NoteHeading, NoteText, NoteCode, NoteTip],
  templateUrl: './note.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./note.css'],
  host: {
    class: 'block w-full',
  },
})
export class Note implements OnChanges {
  private noteService = inject(NoteService)
  private activateRoute = inject(ActivatedRoute)
  @Input() slug!: string;
  notesSummary = signal<NoteSummary[]>([]);
  noteContent = signal<NoteContent | undefined>(undefined);
  url = this.activateRoute.snapshot.url.join('/')

  ngOnChanges() {
    if (this.slug) {
      this.noteService.getNotesByFolderId(this.slug).subscribe((noteSummary) => {
        this.notesSummary.set(noteSummary);
      });
    }
    if (this.url) {
      console.log("coucou")
      this.noteService.getNote(this.url).subscribe((noteContent) => {
        this.noteContent.set(noteContent);
        console.log(this.noteContent);
      });
    }
  }
}

