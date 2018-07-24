import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Guid } from 'guid-typescript';

import { Restauranttype } from './restauranttype.model'

@Injectable()
export class RestauranttypeService {

  selectedRestauranttype: Restauranttype;
  restauranttypeList: Restauranttype[];
  constructor(private http : Http) { }

  postRestauranttype(restyp: Restauranttype) {
    restyp.ID = Guid.create().toString();
    var body = JSON.stringify(restyp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:8080/V1/restauranttypes/',body,requestOptions);
  }

  putRestauranttype(restyp) {
    var body = JSON.stringify(restyp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:8080/V1/restauranttypes/',
      body,
      requestOptions);
  }

  getRestauranttypeList() {
    debugger;
    this.http.get('http://localhost:8080/V1/restauranttypes/')
      .map((data : Response) =>{
        return data.json() as Restauranttype[];
      }).toPromise().then(x => {
      this.restauranttypeList = x;
    })
  }

  deleteRestauranttype(id: string) {
    return this.http.delete('http://localhost:8080/V1/restauranttypes/' + id);
  }
}
