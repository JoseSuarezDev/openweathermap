import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as listActions from "../actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService 
    ) {}

    @Effect()
    getList$ = this.actions$.pipe( 
        ofType( listActions.GET_LIST ),
        switchMap( () => this.weatherService.getList().pipe(
                map( list => new listActions.GetListSucces(list) ),
                catchError( error => of(new listActions.GetListFail( error )) )
                )
            )
        );

}