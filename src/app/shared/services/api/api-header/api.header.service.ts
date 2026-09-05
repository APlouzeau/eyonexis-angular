import { Injectable, inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { EditPermissionService } from '../../../../services/edit-permission.service';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root',
})
export class ApiHeaderService {
  private permissions = inject(EditPermissionService);

  buildHeaders(): HttpHeaders {
    if (!this.permissions.canEdit) {
      console.warn('Tentative d’écriture dans un environnement non éditable (web).');
      // Optionnel :
      // throw new Error('Écriture non autorisée dans cet environnement.');
    }
    const token = this.permissions.bearer;
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${sha256(token)}`);
    }

    return headers;
  }
}
