import { Component, Input, OnChanges, signal } from '@angular/core';
import { NoteContent, NoteSummary } from './interface/note';
import { NoteService } from './services/note-service';
import { NoteHeader } from './components/note-header/note-header';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [NoteHeader, JsonPipe],
  templateUrl: './note.html',
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
