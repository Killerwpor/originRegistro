import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Terminos2Component } from './terminos2.component';

describe('Terminos2Component', () => {
  let component: Terminos2Component;
  let fixture: ComponentFixture<Terminos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terminos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Terminos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
