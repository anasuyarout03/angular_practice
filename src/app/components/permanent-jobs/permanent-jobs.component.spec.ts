import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentJobsComponent } from './permanent-jobs.component';

describe('PermanentJobsComponent', () => {
  let component: PermanentJobsComponent;
  let fixture: ComponentFixture<PermanentJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermanentJobsComponent]
    });
    fixture = TestBed.createComponent(PermanentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
