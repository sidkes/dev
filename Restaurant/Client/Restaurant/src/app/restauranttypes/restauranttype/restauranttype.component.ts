import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { RestauranttypeService } from '../shared/restauranttype.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-restauranttype',
  templateUrl: './restauranttype.component.html',
  styleUrls: ['./restauranttype.component.css']
})
export class RestauranttypeComponent implements OnInit {

  constructor(private restauranttypeService: RestauranttypeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.restauranttypeService.selectedRestauranttype = {
      ID: null,
      Name: ''
    }
  }

  onSubmit(form: NgForm) {
    debugger;
    if (form.value.ID == null) {
      this.restauranttypeService.postRestauranttype(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.restauranttypeService.getRestauranttypeList();
          this.toastr.success('New Record Added Succcessfully', 'Restaurant Type Added');
        })
    }
    else {
      this.restauranttypeService.putRestauranttype(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.restauranttypeService.getRestauranttypeList();
          this.toastr.info('Record Updated Successfully!', 'Restaurant Type Updated.');
        });
    }
  }
}
