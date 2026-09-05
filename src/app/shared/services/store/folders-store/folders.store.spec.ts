import { TestBed } from '@angular/core/testing';
import { FoldersStoreService } from './folders.store.service';

describe('FoldersStoreService', () => {
  let service: FoldersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
