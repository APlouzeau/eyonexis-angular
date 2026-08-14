import { Component, Input, OnChanges } from '@angular/core';
import { NoteContent } from './interface/note';
import { NoteService } from './services/note-service';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrls: ['./note.css'],
})
export class Note implements OnChanges {
  @Input() id!: string;
  note: NoteContent | undefined;

  constructor(private noteService: NoteService) {}

  ngOnChanges() {
    this.note = this.noteService.getNotesById(this.id);
  }
}
