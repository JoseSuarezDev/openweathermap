import { Weather } from 'src/app/models/weather.model';
import * as fromList from "../actions";

export interface ListState {
    list: any;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: ListState = {
    list: null,
    loaded: false,
    loading: false,
    error: null
}

export function listReducer( state = initState, action: fromList.listActions ): ListState {
    switch (action.type) {

        case fromList.GET_LIST:
            return {
                ...state,
                loading:true,
                error: null
            };
        case fromList.GET_LIST_SUCCESS:
            return {
                ...state,
                list: [...action.list.list],
                loading: false,
                loaded: true
            };
        case fromList.GET_LIST_FAIL:
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