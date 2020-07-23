import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newpassword1Component } from './newpassword1.component';

describe('Newpassword1Component', () => {
  let component: Newpassword1Component;
  let fixture: ComponentFixture<Newpassword1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpassword1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newpassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
