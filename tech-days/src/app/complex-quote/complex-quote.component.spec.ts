import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexQuoteComponent } from './complex-quote.component';

describe('ComplexQuoteComponent', () => {
  let component: ComplexQuoteComponent;
  let fixture: ComponentFixture<ComplexQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
