import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexQuoteNewComponent } from './complex-quote-new.component';

describe('ComplexQuoteNewComponent', () => {
  let component: ComplexQuoteNewComponent;
  let fixture: ComponentFixture<ComplexQuoteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexQuoteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexQuoteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
