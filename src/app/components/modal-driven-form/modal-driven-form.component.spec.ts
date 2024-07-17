import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDrivenFormComponent } from './modal-driven-form.component';

describe('ModalDrivenFormComponent', () => {
  let component: ModalDrivenFormComponent;
  let fixture: ComponentFixture<ModalDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDrivenFormComponent]
    });
    fixture = TestBed.createComponent(ModalDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
