import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestSigninComponent } from './contest-signin.component';

describe('ContestSigninComponent', () => {
  let component: ContestSigninComponent;
  let fixture: ComponentFixture<ContestSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
