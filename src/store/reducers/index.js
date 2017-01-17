import { combineReducers } from 'redux'
import {dataGrid, changeFilter, changePagination } from './dataGrid'


export default combineReducers({
    dataGrid,
    changeFilter,
    changePagination
})
