import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as weatherActions from "../actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService 
    ) {}

    @Effect()
    getWeather$ = this.actions$.pipe( 
        ofType( weatherActions.GET_WHEATER ),
        switchMap( action => {
            const city = action['city'];
            return this.weatherService.getWeatherCity(city).pipe(
                map( weather => new weatherActions.GetWeatherSuccesAction(weather) ),
                catchError( error => of(new weatherActions.GetWeatherFailAction( error )) )
                )
            })
        );

}