import { Component, inject, signal } from '@angular/core';
import { EditNoteHeader } from './components/edit-note-header/edit-note-header';
import { EditTextBloc } from './components/edit-text-bloc/edit-text-bloc';
import { NoteContent } from '../interfaces/note';
import { NoteReadService } from '../services/note.read.service';
import { ActivatedRoute } from '@angular/router';
import { AddBloc } from './components/add-bloc/add-bloc/add-bloc';
import { JsonPipe } from '@angular/common';
import { EditCodeBloc } from './components/edit-code-bloc/edit-code-bloc';
import { EditTipBloc } from './components/edit-tip-bloc/edit-tip-bloc';
import { EditTitleBloc } from './components/edit-title-bloc/edit-title-bloc';

@Component({
  imports: [
    EditNoteHeader,
    EditTextBloc,
    AddBloc,
    EditCodeBloc,
    EditTipBloc,
    EditTitleBloc,
    JsonPipe,
  ],
  selector: 'app-edit-note',
  styleUrls: ['./edit-note.css'],
  templateUrl: './edit-note.html',
})
export class EditNote {
  private noteReadService = inject(NoteReadService);
  noteContent = signal<NoteContent | undefined>(undefined);
  private route = inject(ActivatedRoute);

  private urlSub: any;

  ngOnInit() {
    this.urlSub = this.route.url.subscribe((segments) => {
      const urlPath = segments.map((s) => s.path).join('/');

      this.noteReadService.getNote(urlPath).subscribe((noteContent) => {
        this.noteContent.set(noteContent);
        console.log(noteContent);
      });
    });
  }
}
