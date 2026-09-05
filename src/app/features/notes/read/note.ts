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
import { EditPermissionService } from '../../../services/edit-permission.service';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-note',
  imports: [NoteHeader, NoteHeading, NoteText, NoteCode, NoteTip, Button],
  templateUrl: './note.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./note.css'],
  host: {
    class: 'block w-full',
  },
})
export class Note implements OnChanges {
  @Input() id!: string;
  notesSummary = signal<NoteSummary[]>([]);
  noteContent = signal<NoteContent | undefined>(undefined);

  constructor(private noteService: NoteService) {}
  ngOnChanges() {
    if (this.id) {
      this.noteService.getNotesByFolderId(this.id).subscribe((noteSummary) => {
        this.notesSummary.set(noteSummary);
      });
    }
    if (this.id) {
      this.noteService.getNote(this.id).subscribe((noteContent) => {
        this.noteContent.set(noteContent);
        console.log(this.noteContent);
      });
    }
  }
}
