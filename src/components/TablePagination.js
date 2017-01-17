import React, {PropTypes, Component} from 'react'

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
        const {page, pageCount, pageSizes, pageSize} = this.props.pagination;
        return <div>
            <nav aria-label='Page navigation'>
                <ul className='pagination'>
                    <li>
                        <a href='#' aria-label='Previous'>
                            <span aria-hidden='true'>&laquo;</span>
                        </a>
                    </li>
                    {[...Array(pageCount)].map((x, index) =>
                        <li className={(page == index ? 'active' : '' )} key={index}><a href='#' onClick={()=> {
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