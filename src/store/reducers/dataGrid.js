import {
    SET_FILTER,
    GET_PAGE_SUCCESS,
    SET_PAGINATION,
    SET_SORT_FIELD,
    GET_PAGE_REQUEST
} from '../../constants/dataGrid'

const initialState = {
    header: {
        author: 'Исполнитель',
        song: 'Песня',
        genre: 'Жанр',
        year: 'Год'
    },
    fetching: true,
    tableData: [],
    pagination: {
        page: 1,
        pageCount: 20,
        pageSize: 20,
        pageSizes: [10, 20, 30, 100],
        maxPages: 10,
    },
    sort: {
        sortableFields: ['author', 'genre', 'year', 'song'],
        sortField: {author: 'ASC'},
        sortTypes: [{'ASC': 'По возрастанию'}, {'DESC': 'По убыванию'}]
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
            // song: null,
            genre: null,
            year: null
        },
        filterChoice: {
            // author: [],
            genre: [],
            year: [],
        }
    }
};

export function dataGrid(state = initialState, action) {
    switch (action.type) {
        case GET_PAGE_SUCCESS: {
            const tableData = action.payload.data;
            const filterChoice = action.payload.filters;
            const filters = {...state.filters, filterChoice: filterChoice};
            let pagination = {
                ...state.pagination,
                pageCount: Math.ceil(action.payload.cnt / state.pagination.pageSize)
            };
            pagination.page = pagination.page < pagination.pageCount ? pagination.page : pagination.pageCount;
            return {...state, tableData: tableData, pagination: pagination, filters: filters, fetching: false};
        }
        case SET_PAGINATION: {
            let pagination = {...state.pagination, ...action.payload};
            return {...state, pagination: pagination};
        }
        case SET_FILTER: {
            let filterValues = {...state.filters.filterValues, ...action.payload};
            let filters = state.filters;
            filters.filterValues = filterValues;
            let pagination = {
                ...state.pagination,
                page: 1
            };
            return {...state, filters: filters, pagination: pagination};
        }
        case SET_SORT_FIELD: {
            let sortField = action.payload;
            let sort = state.sort;
            sort.sortField = sortField;
            return {...state, sort: sort};
        }
        case GET_PAGE_REQUEST: {
            return {...state, fetching: true, tableData:[]};
        }
        default:
            return state;
    }
}
