import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo5Component } from './observabledemo5.component';

describe('Observabledemo5Component', () => {
  let component: Observabledemo5Component;
  let fixture: ComponentFixture<Observabledemo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Observabledemo5Component]
    });
    fixture = TestBed.createComponent(Observabledemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
