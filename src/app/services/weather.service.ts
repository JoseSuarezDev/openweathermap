import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private APPID = '7916f68832ccd729d25d713462a50027';
  private url = 'http://api.openweathermap.org/data/2.5';

  constructor( private http: HttpClient ) { }

  getWeather() {
    return this.http.get(`${this.url}/weather?q=London,uk&APPID=${this.APPID}`)
    .pipe(map( (resp : any) => resp ));
  }

  getWeatherCity( city: string ) {
    return this.http.get(`${this.url}/weather?q=${city}&APPID=${this.APPID}`)
    .pipe(map( resp => resp['main'] ));
  }

}
