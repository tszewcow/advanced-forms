import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErrorMessagesComponent } from './add-error-messages.component';

describe('AddErrorMessagesComponent', () => {
  let component: AddErrorMessagesComponent;
  let fixture: ComponentFixture<AddErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
