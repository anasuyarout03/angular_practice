import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm1Component } from './template-driven-form1.component';

describe('TemplateDrivenForm1Component', () => {
  let component: TemplateDrivenForm1Component;
  let fixture: ComponentFixture<TemplateDrivenForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenForm1Component]
    });
    fixture = TestBed.createComponent(TemplateDrivenForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
