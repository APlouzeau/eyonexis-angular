import { TestBed } from '@angular/core/testing';

import { Folders } from './folders';

describe('Folders', () => {
  let service: Folders;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Folders);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
