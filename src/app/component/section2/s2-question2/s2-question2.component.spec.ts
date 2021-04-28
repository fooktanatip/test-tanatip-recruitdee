import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Question2Component } from './s2-question2.component';

describe('S2Question2Component', () => {
  let component: S2Question2Component;
  let fixture: ComponentFixture<S2Question2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Question2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2Question2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
