import * as reducers from "./reducers";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    list: reducers.ListState,
    weather: reducers.WeatherState
}

export const appReducers: ActionReducerMap<AppState> = {
    list: reducers.listReducer,
    weather: reducers.weatherReducer
}