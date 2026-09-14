import { Component, input } from '@angular/core';
import { TipBlock } from '../../../interfaces/note';

@Component({
  imports: [],
  selector: 'app-edit-tip-bloc',
  styleUrl: './edit-tip-bloc.css',
  templateUrl: './edit-tip-bloc.html',
})
export class EditTipBloc {
  block = input<TipBlock>();
}
