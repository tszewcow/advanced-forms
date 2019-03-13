import {Component, forwardRef, Input, OnChanges, OnInit, Optional, Self, SimpleChanges, ViewChild} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl, NgForm,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {Address} from '../address';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {Error} from 'tslint/lib/error';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.touched;
  }
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    },
    {
      provide: ErrorStateMatcher,
      useClass: MyErrorStateMatcher
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

  form: FormGroup;
  @Input() isParentSubmitted = false;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      street: new FormControl('', {validators: Validators.required}),
      zipCode: new FormControl('', {validators: Validators.required}),
      city: new FormControl('', {validators: Validators.required}),
      country: new FormControl('', {validators: Validators.required}),
    });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: Address): void {
    val && this.form.setValue(val, {emitEvent: false});
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false, message: 'address form is invalid'}};
  }

  ngOnChanges(changes: SimpleChanges): void {
    const submitted = changes.isParentSubmitted;
    this.isParentSubmitted = submitted.currentValue;
    if (this.isParentSubmitted) {
      // workaround for the angular material bug: https://github.com/angular/material2/issues/7920
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });
    }
  }

}
