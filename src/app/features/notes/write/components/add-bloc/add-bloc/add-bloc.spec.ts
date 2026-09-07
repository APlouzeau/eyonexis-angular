import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBloc } from './add-bloc';

describe('AddBloc', () => {
  let component: AddBloc;
  let fixture: ComponentFixture<AddBloc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBloc],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBloc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
