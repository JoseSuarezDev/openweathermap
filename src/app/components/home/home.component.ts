import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.reducer';
import { Wheater } from 'src/app/models/weather.model';

import * as weatherActions from "../../../store/actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 'select {  display: initial; }' ]
})
export class HomeComponent implements OnInit {

  name: string;
  weather: Wheater;
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

    this.store.select('weather')
    .subscribe( weather => {
      this.weather = weather.weather
      this.loading = weather.loading
      this.error = weather.error
    })
    this.name = 'London,uk'
    this.showOption()
  }

  showOption(): void {
    this.store.dispatch( new weatherActions.GetWeatherAction(this.name)  ) 
  }

}
