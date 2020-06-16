import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZelrosSummaryComponent } from './view-zelros-summary.component';

describe('ViewZelrosSummaryComponent', () => {
  let component: ViewZelrosSummaryComponent;
  let fixture: ComponentFixture<ViewZelrosSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewZelrosSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewZelrosSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
