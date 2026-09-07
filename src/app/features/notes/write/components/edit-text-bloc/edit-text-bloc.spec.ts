import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTextBloc } from './edit-text-bloc';

describe('EditTextBloc', () => {
  let component: EditTextBloc;
  let fixture: ComponentFixture<EditTextBloc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTextBloc],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTextBloc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
