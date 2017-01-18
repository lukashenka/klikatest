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

        let pages = lodash.range(1, pageCount);
        if (pageCount > maxPages) {
            const minPage = page - Math.ceil(maxPages / 2);
            let maxPage = page + Math.ceil(maxPages / 2);
            if (maxPage > pageCount) {
                maxPage = pageCount + 1;
            }
            pages = lodash.range(minPage > 0 ? minPage : 1, maxPage);
        }
        return <div>
            <nav>
                <ul className='col-sm-12 pagination'>
                    {page !== 1 &&
                    <li>
                        <a onClick={()=> {
                            this.setPage(1)
                        }} href='#'>
                            <span>&laquo;</span>
                        </a>
                    </li>

                    }
                    {pages.map((pageIndex) =>
                        <li className={(page == pageIndex ? 'active' : '' )} key={pageIndex}>
                            <a href='#'
                               onClick={()=> {
                                   this.setPage(pageIndex)
                               }}>{pageIndex}</a>
                        </li>
                    )}
                    {page < pageCount &&
                    <li>
                        <a onClick={()=> {
                            this.setPage(pageCount)
                        }} href='#'>
                            <span>&raquo;</span>
                        </a>
                    </li>
                    }
                    <li>
                        <form id="pageSizer" className='navbar-form navbar-right'>
                            <div className='form-group'>
                                <select className='form-control col-sm-2' onChange={::this.setPageSize}
                                        defaultValue={pageSize}>
                                    {pageSizes.map((size, index) => {
                                        return <option key={index}>{size}</option>
                                    })}
                                </select>
                            </div>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    }
}
TablePagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    changePagination: PropTypes.func.isRequired
}