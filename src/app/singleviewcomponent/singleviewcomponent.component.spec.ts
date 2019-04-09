import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleviewcomponentComponent } from './singleviewcomponent.component';

describe('SingleviewcomponentComponent', () => {
  let component: SingleviewcomponentComponent;
  let fixture: ComponentFixture<SingleviewcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleviewcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleviewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
