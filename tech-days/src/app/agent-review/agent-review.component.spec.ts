import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReviewComponent } from './agent-review.component';

describe('AgentReviewComponent', () => {
  let component: AgentReviewComponent;
  let fixture: ComponentFixture<AgentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
