import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RestauranttypesComponent } from './restauranttypes/restauranttypes.component';
import { RestauranttypeComponent } from './restauranttypes/restauranttype/restauranttype.component';
import { RestauranttypeListComponent } from './restauranttypes/restauranttype-list/restauranttype-list.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RestauranttypesComponent,
    RestauranttypeComponent,
    RestauranttypeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
