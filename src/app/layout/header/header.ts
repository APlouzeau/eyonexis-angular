import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal, inject } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { EditPermissionService } from '../../services/edit-permission.service';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.css'],
})
export class Header {
  private permissions = inject(EditPermissionService);
  canEdit = this.permissions.canEdit;
  source = this.permissions.source;
  protected readonly title = signal('Eyonexis');

  constructor(private editPermissionService: EditPermissionService) {
    this.canEdit = this.editPermissionService.canEdit;
    this.source = this.editPermissionService.source;
  }
}
