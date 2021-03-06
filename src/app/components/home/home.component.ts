import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.reducer';
import { Weather } from 'src/app/models/weather.model';

import * as weatherActions from "../../../store/actions";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 'select {  display: initial; }' ]
})
export class HomeComponent implements OnInit, OnDestroy {

  subscribe : Subscription;
  name: string;
  weather: Weather;
  loading: boolean;
  error: any;
  cities = [
    { code: 'London,uk' , city: 'London UK'},
    { code: 'Caracas,ve' , city: 'Caracas'},
    { code: 'New York,us' , city: 'New York'},
    { code: 'Bogota,co' , city: 'Bogota'},
    { code: 'London,gb' , city: 'London GB'}
  ]

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.subscribe = this.store.select('weather')
    .subscribe( weather => {
      this.weather = weather.weather
      this.loading = weather.loading
      this.error = weather.error
    })
    this.name = 'London,uk'
    this.showOption()
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()    
  }

  showOption(): void {
    this.store.dispatch( new weatherActions.GetWeatherAction(this.name)  ) 
  }

}
