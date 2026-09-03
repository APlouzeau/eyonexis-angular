import { Component, Input, OnChanges, signal, ChangeDetectionStrategy } from '@angular/core';
import { NoteContent, NoteSummary } from './interfaces/note';
import { NoteService } from './services/note.service';
import { NoteHeader } from './read/components/note-header/note-header';
import { NoteHeading } from './read/components/note-heading/note-heading';
import { NoteText } from './read/components/note-text/note-text';
import { NoteCode } from './read/components/note-code/note-code';
import { NoteTip } from './read/components/note-tip/note-tip';

@Component({
  selector: 'app-note',
  imports: [NoteHeader, NoteHeading, NoteText, NoteCode, NoteTip],
  templateUrl: './note.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./note.css'],
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
