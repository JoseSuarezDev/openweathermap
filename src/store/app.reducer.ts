import * as reducers from "./reducers";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    weather: reducers.WeatherState
}

export const appReducers: ActionReducerMap<AppState> = {
    weather: reducers.weatherReducer
}