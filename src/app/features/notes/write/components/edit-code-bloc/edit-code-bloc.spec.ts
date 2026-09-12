import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCodeBloc } from './edit-code-bloc';

describe('EditCodeBloc', () => {
  let component: EditCodeBloc;
  let fixture: ComponentFixture<EditCodeBloc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCodeBloc],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCodeBloc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
