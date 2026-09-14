import { Component, input } from '@angular/core';
import { TitleBlock } from '../../../interfaces/note';

@Component({
  imports: [],
  selector: 'app-edit-title-bloc',
  styleUrl: './edit-title-bloc.css',
  templateUrl: './edit-title-bloc.html',
})
export class EditTitleBloc {
  block = input<TitleBlock>();
}
