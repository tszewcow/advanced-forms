// TODO: according to Angular SG you should keep the appropriate order of imports:
// 1. Angular Imports
// 2. After empty line -> third party libs (angular/material / rjxjs...
// 3. After empty line -> your internal imports
import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material';
import {Genre} from '@book/genre';

@Component({
  selector: 'app-customized-select-box',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomizedSelectBoxComponent),
      multi: true
    }
  ]
})
export class CustomizedSelectBoxComponent implements OnInit, ControlValueAccessor {
  // TODO: try to keep correct order of things in the component
  // @Inputs and @Outputs (they define api), @ViewChild / @ViewChildren, public members, private members, constructor,
  // lifecycle hooks, implmented / overriden methods, public methods, private methods

  @ViewChild(MatSelect) matSelect: MatSelect;
  @Input() placeholder: string;
  @Input() options: Genre[] = [];

  selected: any;

  constructor() {}

  // TODO: van be private and the name propagateChange would be better here
  onChange = (val: any) => {};

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // TODO - you should define on touched callback and call it for example on blur. Then the control will recieve ng-touched class on touch
    // now it does not work
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.matSelect.value = obj;
    this.setSelectedIfGenreDefined();
  }

  onSelectionChange() {
    this.setSelectedIfGenreDefined();
    this.onChange(this.matSelect.value);
  }

  private setSelectedIfGenreDefined() {
    const genre = this.findGenreById(this.matSelect.value);
    if (genre) {
      this.selected = genre.name;
    }
  }

  private findGenreById(id: number): Genre {
    return this.options.find(genre => genre.id === id);
  }
}
