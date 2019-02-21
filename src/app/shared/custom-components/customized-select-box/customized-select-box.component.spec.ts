import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedSelectBoxComponent } from './customized-select-box.component';

describe('CustomizedSelectBoxComponent', () => {
  let component: CustomizedSelectBoxComponent;
  let fixture: ComponentFixture<CustomizedSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
