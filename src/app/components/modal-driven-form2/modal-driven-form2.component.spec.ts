import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDrivenForm2Component } from './modal-driven-form2.component';

describe('ModalDrivenForm2Component', () => {
  let component: ModalDrivenForm2Component;
  let fixture: ComponentFixture<ModalDrivenForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDrivenForm2Component]
    });
    fixture = TestBed.createComponent(ModalDrivenForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
