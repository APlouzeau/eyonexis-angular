import { TestBed } from '@angular/core/testing';
import { EditPermissionService } from './edit-permission.service';

describe('EditPermissionService', () => {
  let service: EditPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
