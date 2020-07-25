import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestTimerComponent } from './contest-timer.component';

describe('ContestTimerComponent', () => {
  let component: ContestTimerComponent;
  let fixture: ComponentFixture<ContestTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
