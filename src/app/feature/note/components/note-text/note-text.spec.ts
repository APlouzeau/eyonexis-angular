import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteText } from './note-text';

describe('NoteText', () => {
  let component: NoteText;
  let fixture: ComponentFixture<NoteText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteText],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
