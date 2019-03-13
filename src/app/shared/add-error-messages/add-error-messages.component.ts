import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-add-error-messages',
  templateUrl: './add-error-messages.component.html',
  styleUrls: ['./add-error-messages.component.scss']
})
export class AddErrorMessagesComponent implements AfterContentInit {

  @Input()
  ofForm: FormGroupDirective;

  @ContentChild(FormControlDirective)
  private formControl: FormControlDirective;

  @ContentChild(FormControlName)
  private formControlName: FormControlName;

  wrappedFormControl: FormControl;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.wrappedFormControl = this.getWrappedFormControl();
    if (!this.wrappedFormControl) {
      console.warn('No form control wrapped');
    }
  }

  private getWrappedFormControl(): FormControl {
    return (this.formControl && this.formControl.control) || (this.formControlName && this.formControlName.control);
  }

}
