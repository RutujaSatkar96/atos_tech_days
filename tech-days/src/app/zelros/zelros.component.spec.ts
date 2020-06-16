import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZelrosComponent } from './zelros.component';

describe('ZelrosComponent', () => {
  let component: ZelrosComponent;
  let fixture: ComponentFixture<ZelrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZelrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZelrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
