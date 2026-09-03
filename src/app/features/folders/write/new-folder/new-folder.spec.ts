import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewFolder } from './new-folder';

describe('NewFolder', () => {
  let component: NewFolder;
  let fixture: ComponentFixture<NewFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFolder],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
