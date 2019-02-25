import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class GeneralInfoComponent implements OnInit {
  form: FormGroupDirective;
  constructor(private parent: FormGroupDirective) {
    this.form = parent;
  }

  ngOnInit() {
    this.form.form.addControl('generalInfo', new FormGroup({
      firstName: new FormControl('', {validators: Validators.required}),
      lastName: new FormControl('', {validators: Validators.required}),
    }));
  }

}
