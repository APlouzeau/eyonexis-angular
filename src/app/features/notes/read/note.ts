import {
  Component,
  signal,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  OnDestroy,
  input,
} from '@angular/core';
import { NoteContent, NoteSummary } from '../interfaces/note';
import { NoteReadService } from '../services/note.read.service';
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
export class Note implements OnInit, OnDestroy {
  private noteReadService = inject(NoteReadService);
  private route = inject(ActivatedRoute);

  noteContent = signal<NoteContent | undefined>(undefined);

  private urlSub: any;

  ngOnInit() {
    this.urlSub = this.route.url.subscribe((segments) => {
      const urlPath = segments.map((s) => s.path).join('/');
      console.log('URL détectée :', urlPath);

      this.noteReadService.getNote(urlPath).subscribe((noteContent) => {
        this.noteContent.set(noteContent);
      });
    });
  }

  ngOnDestroy() {
    if (this.urlSub) {
      this.urlSub.unsubscribe();
    }
  }
}
