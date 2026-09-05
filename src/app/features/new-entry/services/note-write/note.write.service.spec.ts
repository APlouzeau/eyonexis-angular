import { TestBed } from '@angular/core/testing';
import { NoteWriteService } from './note.write.service';

describe('NoteWriteService', () => {
  let service: NoteWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
