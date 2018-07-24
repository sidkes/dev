import { Component, OnInit } from '@angular/core';

import { RestauranttypeService } from '../shared/restauranttype.service'
import { Restauranttype } from '../shared/restauranttype.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-restauranttype-list',
  templateUrl: './restauranttype-list.component.html',
  styleUrls: ['./restauranttype-list.component.css']
})
export class RestauranttypeListComponent implements OnInit {

  constructor(private restauranttypeService: RestauranttypeService,private toastr : ToastrService) { }

  ngOnInit() {
    this.restauranttypeService.getRestauranttypeList();
  }

  showForEdit(emp: Restauranttype) {
    debugger;
    this.restauranttypeService.selectedRestauranttype = Object.assign({}, emp);
  }


  onDelete(id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      debugger;
      this.restauranttypeService.deleteRestauranttype(id)
        .subscribe(x => {
          this.restauranttypeService.getRestauranttypeList();
          this.toastr.warning("Deleted Successfully","Restaurant Type");
        })
    }
  }
}
