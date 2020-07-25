import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestBeginComponent } from './contest-begin.component';

describe('ContestBeginComponent', () => {
  let component: ContestBeginComponent;
  let fixture: ComponentFixture<ContestBeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestBeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
