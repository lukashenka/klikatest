import React, {Component} from 'react'
import { changePagination } from './../actions/DataGridAction'
import { connect } from 'react-redux'

export class TablePagination extends Component {

    setPage(page) {
        let pageSize = 100;
        this.props.dispatch(changePagination({page: page, pageSize: pageSize}));

    }

    render() {
        const {page, pageCount} = this.props.pagination;
        return <nav aria-label='Page navigation'>
            <ul className='pagination'>
                <li>
                    <a href='#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                    </a>
                </li>
                {[...Array(pageCount)].map((x, index) =>
                    <li className={(page == index ?  'active' : '' )} key={index}><a href='#' onClick={()=> {
                        this.setPage(index)
                    }}>{index}</a></li>
                )}
                <li>
                    <a href='#' aria-label='Next'>
                        <span aria-hidden='true'>&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>

    }
}

export default connect()(TablePagination)