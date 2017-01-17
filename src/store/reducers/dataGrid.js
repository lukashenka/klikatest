import {
    SET_FILTER,
    GET_PAGE_SUCCESS,
    SET_PAGINATION
} from '../../constants/dataGrid'

const initialState = {
    header: {
        author: 'Исполнитель',
        song: 'Песня',
        genre: 'Жанр',
        year: 'Год'
    },
    tableData: [],
    pagination: {
        page: 1,
        pageCount: 20,
        pageSize: 20,
    },
    filters: {
        fields: {
            author: 'Исполнитель',
            song: 'Песня',
            genre: 'Жанр',
            year: 'Год'
        },
        filterValues: {
            author: null,
            song: null,
            genre: null,
            year: null
        }
    }
};

export function dataGrid(state = initialState, action) {
    switch (action.type) {
        case GET_PAGE_SUCCESS: {
            return {...state, tableData: action.payload};
        }
        default:
            return state;
    }

}

export function changePagination(state = initialState, action) {
    switch (action.type) {
        case SET_PAGINATION: {
            console.log(state.pagination);
            let pagination = {...state.pagination, ...action.payload};
            return {...state, pagination: pagination};
        }
        default:
            return state;
    }
}

export function changeFilter(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER: {
            let filterValues = {...state.filters.filterValues, ...action.payload};
            let filters = state.filters;
            filters.filterValues = filterValues;
            return {...state, filters: filters};
        }
        default:
            return state;
    }
}