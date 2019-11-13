import { Action } from '@ngrx/store';
import { Wheater } from 'src/app/models/weather.model';

export const GET_WHEATER = ' [Weather] Get weather '
export const GET_WHEATER_FAIL = ' [Weather] Get weather fail '
export const GET_WHEATER_SUCCESS = ' [Weather] Get weather success '

export class GetWeatherAction implements Action {
    readonly type = GET_WHEATER;

    constructor( public city: string ) {}
}
export class GetWeatherFailAction implements Action {
    readonly type = GET_WHEATER_FAIL;

    constructor( public payload: any ) {}
}
export class GetWeatherSuccesAction implements Action {
    readonly type = GET_WHEATER_SUCCESS;

    constructor( public weather: Wheater ) {}
}

export type weatherActions = GetWeatherAction | GetWeatherFailAction | 
    GetWeatherSuccesAction ; ;  