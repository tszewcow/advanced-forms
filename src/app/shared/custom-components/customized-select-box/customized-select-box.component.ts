import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {Genre} from '../../../book/genre';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material';

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
  @ViewChild(MatSelect) matSelect: MatSelect;
  @Input() formControl: FormControl;
  @Input() placeholder: string;
  @Input() options: Genre[] = [];

  selected: any;
  onChange = (val: any) => {};

  constructor() {}

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.matSelect.value = obj;
    const genre = this.findGenreById(obj);
    if (genre) {
      this.selected = genre.name;
    }
  }

  onSelectionChange() {
    const genre = this.findGenreById(this.matSelect.value);
    if (genre) {
      this.selected = genre.name;
    }
    this.onChange(this.matSelect.value);
  }

  private findGenreById(id: number): Genre {
    return this.options.find(genre => genre.id === id);
  }
}
