import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiHeaderService } from './api.header.service';

describe('ApiHeaderService', () => {
  let component: ApiHeaderService;
  let fixture: ComponentFixture<ApiHeaderService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiHeaderService],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiHeaderService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
