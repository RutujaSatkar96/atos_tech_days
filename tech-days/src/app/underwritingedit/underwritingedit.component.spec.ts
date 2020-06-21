import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwritingeditComponent } from './underwritingedit.component';

describe('UnderwritingeditComponent', () => {
  let component: UnderwritingeditComponent;
  let fixture: ComponentFixture<UnderwritingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwritingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwritingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
