import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCode } from './note-code';

describe('NoteCode', () => {
  let component: NoteCode;
  let fixture: ComponentFixture<NoteCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteCode],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
