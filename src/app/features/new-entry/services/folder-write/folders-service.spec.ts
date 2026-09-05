import { TestBed } from '@angular/core/testing';
import { FoldersWriteService } from './folders.write.service';

describe('FoldersWriteService', () => {
  let service: FoldersWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldersWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
