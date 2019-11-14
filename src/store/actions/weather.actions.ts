import { Action } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';

export const GET_WEATHER = ' [Weather] Get weather '
export const GET_WEATHER_FAIL = ' [Weather] Get weather fail '
export const GET_WEATHER_SUCCESS = ' [Weather] Get weather success '

export class GetWeatherAction implements Action {
    readonly type = GET_WEATHER;

    constructor( public city: string ) {}
}
export class GetWeatherFailAction implements Action {
    readonly type = GET_WEATHER_FAIL;

    constructor( public payload: any ) {}
}
export class GetWeatherSuccesAction implements Action {
    readonly type = GET_WEATHER_SUCCESS;

    constructor( public weather: Weather ) {}
}

export type weatherActions = GetWeatherAction | GetWeatherFailAction | 
    GetWeatherSuccesAction ; 