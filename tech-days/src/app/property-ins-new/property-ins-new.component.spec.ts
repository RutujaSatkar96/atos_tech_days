import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInsNewComponent } from './property-ins-new.component';

describe('PropertyInsNewComponent', () => {
  let component: PropertyInsNewComponent;
  let fixture: ComponentFixture<PropertyInsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
