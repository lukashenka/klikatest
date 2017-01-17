import React, {PropTypes, Component} from 'react';
import lodash from 'lodash';

export default class TablePagination extends Component {

    setPage(page) {
        this.props.changePagination({page: page});
    }

    setPageSize(el) {
        this.props.changePagination({pageSize: el.target.value});
    }

    componentDidMount() {
    }

    render() {
        const {page, pageCount, pageSizes, pageSize, maxPages} = this.props.pagination;
        const minPage = page - Math.ceil(maxPages / 2);
        const maxPage = page + Math.ceil(maxPages / 2);
        const pages = lodash.range(minPage > 0 ? minPage : 1, maxPage);
        return <div>
            <nav>
                <ul className='pagination'>
                    {page !== 1 &&
                    <li>
                        <a onClick={()=> {
                            this.setPage(page - 1)
                        }} href='#'>
                            <span>&laquo;</span>
                        </a>
                    </li>

                    }
                    {pages.map((pageIndex) =>
                        <li className={(page == pageIndex ? 'active' : '' )} key={pageIndex}><a href='#' onClick={()=> {
                            this.setPage(pageIndex)
                        }}>{pageIndex}</a></li>
                    )}
                    <li>
                        <a onClick={()=> {
                            this.setPage(page + 1)
                        }} href='#'>
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <select className='form-control' onChange={::this.setPageSize} defaultValue={pageSize}>
                {pageSizes.map((size, index) => {
                    return <option key={index}>{size}</option>
                })}
            </select>
        </div>
    }
}
TablePagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    changePagination: PropTypes.func.isRequired
}