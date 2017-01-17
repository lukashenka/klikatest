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
        pageSizes: [10, 20, 30, 100],
        maxPages: 10,
    },
    sort: {
        author: 'ASC',
    },
    filters: {
        fields: {
            author: 'Исполнитель',
            // song: 'Песня',
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
            const tableData = action.payload.data;
            const pagination = {
                ...state.pagination,
                pageCount: Math.ceil(action.payload.cnt / state.pagination.pageSize)
            };
            return {...state, tableData: tableData, pagination: pagination};
        }
        case SET_PAGINATION: {
            let pagination = {...state.pagination, ...action.payload};
            return {...state, pagination: pagination};
        }
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
