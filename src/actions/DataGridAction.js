import {
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
    SET_PAGINATION,
    SET_FILTER
} from '../constants/dataGrid'

export function loadTable(filter, pagination) {

    return (dispatch) => {
        dispatch({
            type: GET_PAGE_REQUEST
        });

        setTimeout(() => {
            dispatch({
                type: GET_PAGE_SUCCESS,
                payload: [
                    {
                        author: filter.author + pagination.page,
                        song: filter.song + pagination.page,
                        genre: filter.genre + pagination.page,
                        year: filter.year + pagination.page
                    },
                    {
                        author: filter.author + pagination.page,
                        song: filter.song + pagination.page,
                        genre: filter.genre + pagination.page,
                        year: filter.year + pagination.page
                    },
                    {
                        author: filter.author + pagination.page,
                        song: filter.song + pagination.page,
                        genre: filter.genre + pagination.page,
                        year: filter.year + pagination.page
                    },
                ]
            })
        }, 1000)
    }
}

export function changePagination(pagination) {

    return (dispatch) => {
        dispatch({
            type: SET_PAGINATION,
            payload: pagination
        })
    }
}

export function changeFilter(filters) {
    return {
        type: SET_FILTER,
        payload: filters
    }
}