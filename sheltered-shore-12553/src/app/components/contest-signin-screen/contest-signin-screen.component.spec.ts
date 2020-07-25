import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestSigninScreenComponent } from './contest-signin-screen.component';

describe('ContestSigninScreenComponent', () => {
  let component: ContestSigninScreenComponent;
  let fixture: ComponentFixture<ContestSigninScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestSigninScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestSigninScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
