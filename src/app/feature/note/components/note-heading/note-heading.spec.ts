import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHeading } from './note-heading';

describe('NoteHeading', () => {
  let component: NoteHeading;
  let fixture: ComponentFixture<NoteHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteHeading],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteHeading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
