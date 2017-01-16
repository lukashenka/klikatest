import React, {Component} from 'react'

export default class TablePagination extends Component {


    getPage(page) {
        let pageSize = 100;
        const {getPage} = this.props;
        getPage(page, pageSize);
    }
    render() {
        const {pageCount} = this.props.pagination;

        return <nav aria-label='Page navigation'>
            <ul className='pagination'>
                <li>
                    <a href='#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                    </a>
                </li>
                {[...Array(pageCount)].map((x, i) =>
                    <li key={i}><a onClick={this.getPage(i)}>{i}</a></li>
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