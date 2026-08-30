import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTip } from './note-tip';

describe('NoteTip', () => {
  let component: NoteTip;
  let fixture: ComponentFixture<NoteTip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTip],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteTip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
