import { Component, OnInit } from '@angular/core';
import {RestauranttypeService} from './shared/restauranttype.service'
@Component({
  selector: 'app-restauranttypes',
  templateUrl: './restauranttypes.component.html',
  styleUrls: ['./restauranttypes.component.css'],
  providers:[RestauranttypeService]
})
export class RestauranttypesComponent implements OnInit {

  constructor(private restauranttypeService : RestauranttypeService) { }

  ngOnInit() {
  }

}
