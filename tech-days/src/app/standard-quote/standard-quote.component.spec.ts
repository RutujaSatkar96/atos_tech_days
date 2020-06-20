import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardQuoteComponent } from './standard-quote.component';

describe('StandardQuoteComponent', () => {
  let component: StandardQuoteComponent;
  let fixture: ComponentFixture<StandardQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
