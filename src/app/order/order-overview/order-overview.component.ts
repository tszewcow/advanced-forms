import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  apply(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('saved!');
      console.log(this.form.getRawValue());
    }
  }

}