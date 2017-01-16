import {
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
    GET_PAGE_ERROR
} from '../constants/dataGrid'

export function getPage(page, pageSize = 10) {

    return (dispatch) => {
        dispatch({
            type: GET_PAGE_REQUEST
        });

        setTimeout(() => {
            dispatch({
                type: GET_PAGE_SUCCESS,
                payload: [
                    {
                        author: 'Исполнитель' + page,
                        song: 'Песня' + page,
                        genre: 'Жанр' + page,
                        year: '2013' + page
                    },
                    {
                        author: 'Исполнитель' + page,
                        song: 'Песня' + page,
                        genre: 'Жанр' + page,
                        year: '2016' + page
                    }
                ]
            })
        }, 1000)
    }
}
