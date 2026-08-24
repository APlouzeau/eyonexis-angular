import { Component, Input, OnChanges } from '@angular/core';
import { NoteContent, NoteSummary } from './interface/note';
import { NoteService } from './services/note-service';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrls: ['./note.css'],
})
export class Note implements OnChanges {
  @Input() id!: string;
  notesSummary: NoteSummary | undefined;
  noteContent: NoteContent | undefined;

  constructor(private noteService: NoteService) {}
  ngOnChanges() {
    if (this.id) {
      this.noteService.getNotesById(this.id).subscribe((note) => {
        this.notesSummary = this.notesSummary;
      });
    }
  }
}
