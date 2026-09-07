import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNoteHeader } from './edit-note-header';

describe('EditNoteHeader', () => {
  let component: EditNoteHeader;
  let fixture: ComponentFixture<EditNoteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNoteHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(EditNoteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
