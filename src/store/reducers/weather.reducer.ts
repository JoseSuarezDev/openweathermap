import { Weather } from 'src/app/models/weather.model';
import * as fromWeather from "../actions";

export interface WeatherState {
    weather: Weather;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: WeatherState = {
    weather: null,
    loaded: false,
    loading: false,
    error: null
}

export function weatherReducer( state = initState, action: fromWeather.weatherActions ): WeatherState {
    switch (action.type) {

        case fromWeather.GET_WEATHER:
            return {
                ...state,
                loading:true,
                error: null
            };
        case fromWeather.GET_WEATHER_SUCCESS:
            return {
                ...state,
                weather: {...action.weather},
                loading: false,
                loaded: true
            };
        case fromWeather.GET_WEATHER_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }
        default:
            return state
    }
}