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
  protected readonly title = signal('Eyonexis');
}
