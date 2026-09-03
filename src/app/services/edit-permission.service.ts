import { inject, Injectable } from '@angular/core';
import { capabilities } from '../../environments/capabilities';

@Injectable({
  providedIn: 'root',
})
export class EditPermissionService {
  public canEdit = capabilities.canEdit;
  public source = capabilities.source;
}
