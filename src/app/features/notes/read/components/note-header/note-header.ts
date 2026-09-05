import { DatePipe } from '@angular/common';
import { Component, input, ChangeDetectionStrategy, inject } from '@angular/core';
import { Button } from '../../../../../shared/components/button/button';
import { NoteContent } from '../../../interfaces/note';
import { EditPermissionService } from '../../../../../services/edit-permission.service';

@Component({
  selector: 'app-note-header',
  imports: [DatePipe, Button],
  templateUrl: './note-header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./note-header.css'],
})
export class NoteHeader {
  private permissions = inject(EditPermissionService);
  canEdit = this.permissions.canEdit;
  note = input<NoteContent>();
}
