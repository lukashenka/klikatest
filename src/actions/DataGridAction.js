import {
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
    SET_PAGINATION,
    SET_FILTER,
    SET_SORT_FIELD
} from '../constants/dataGrid'

import fetch from 'isomorphic-fetch'
import qs from 'qs'

export function loadTable(state) {
    return (dispatch) => {
        dispatch({
            type: GET_PAGE_REQUEST
        });

        const {page, pageSize} = state.pagination;
        let {filterValues} = state.filters;

        let params = {
            page: page,
            pageSize: pageSize,
            filter: filterValues,
            sort: state.sort.sortField
        };

        params = qs.stringify(params);
        console.log(params);
        return fetch('/api/songs?' + params).then(response => response.json())
            .then(json => dispatch({
                type: GET_PAGE_SUCCESS,
                payload: json
            }))

    }
}

export function changePagination(pagination) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_PAGINATION,
            payload: pagination
        });
        dispatch(loadTable(getState().dataGrid));
    }
}

export function changeFilter(filters) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_FILTER,
            payload: filters
        });
        dispatch(loadTable(getState().dataGrid));
    }
}

export function changeSort(sortField) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_SORT_FIELD,
            payload: sortField
        });
        dispatch(loadTable(getState().dataGrid));
    }
}