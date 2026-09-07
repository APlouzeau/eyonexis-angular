import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInput } from './edit-input';

describe('EditInput', () => {
  let component: EditInput;
  let fixture: ComponentFixture<EditInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInput],
    }).compileComponents();

    fixture = TestBed.createComponent(EditInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
