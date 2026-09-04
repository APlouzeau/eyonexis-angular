import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FolderCreation } from './folder-creation';

describe('FolderCreation', () => {
  let component: FolderCreation;
  let fixture: ComponentFixture<FolderCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(FolderCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
