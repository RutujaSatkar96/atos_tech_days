import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInspctionComponent } from './property-inspction.component';

describe('PropertyInspctionComponent', () => {
  let component: PropertyInspctionComponent;
  let fixture: ComponentFixture<PropertyInspctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInspctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInspctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
