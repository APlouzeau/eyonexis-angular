import { Component, input } from '@angular/core';
import { ListBlock } from '../../interface/note';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList {
  block = input<ListBlock>();
}
