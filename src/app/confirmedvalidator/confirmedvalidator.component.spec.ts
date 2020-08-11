import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedvalidatorComponent } from './confirmedvalidator.component';

describe('ConfirmedvalidatorComponent', () => {
  let component: ConfirmedvalidatorComponent;
  let fixture: ComponentFixture<ConfirmedvalidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedvalidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
