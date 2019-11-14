import { Action } from '@ngrx/store';

export const GET_LIST = ' [List] Get list '
export const GET_LIST_FAIL = ' [List] Get list fail '
export const GET_LIST_SUCCESS = ' [List] Get list success '

export class GetList implements Action {
    readonly type = GET_LIST;
}

export class GetListFail implements Action {
    readonly type = GET_LIST_FAIL;

    constructor( public payload: any ) {}
}
export class GetListSucces implements Action {
    readonly type = GET_LIST_SUCCESS;

    constructor( public list: any ) {}
}

export type listActions = GetList | GetListFail | 
    GetListSucces ; 