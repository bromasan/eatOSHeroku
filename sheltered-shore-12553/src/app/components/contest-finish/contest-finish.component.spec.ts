import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestFinishComponent } from './contest-finish.component';

describe('ContestFinishComponent', () => {
  let component: ContestFinishComponent;
  let fixture: ComponentFixture<ContestFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
