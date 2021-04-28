import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Question1Component } from './s2-question1.component';

describe('S2Question1Component', () => {
  let component: S2Question1Component;
  let fixture: ComponentFixture<S2Question1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Question1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2Question1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
