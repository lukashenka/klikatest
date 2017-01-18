import React, {Component} from 'react'
import TablePagination from '../components/TablePagination';
import DataFilter from '../components/DataFilter';
import DataSort from '../components/DataSort';
import Preloader from '../components/Preloader';

export default class DataGrid extends Component {

    tableRows() {
        const {tableData, header} = this.props.dataGrid;
        return tableData.map((columns, index) => {
            var row = Object.keys(header).map((key) => {
                return <td key={key}>{columns[key]}</td>;
            });
            return <tr key={index}>{row}</tr>;
        });
    }

    componentDidMount() {
        this.props.loadTable(this.props.dataGrid);
    }

    render() {
        const {header, pagination, filters, sort, fetching} = this.props.dataGrid;
        const {changePagination, changeSort, changeFilter} = this.props;
        return <div className='container'>
            <div id='dataFilter' className='row'>
                <DataFilter filters={filters} changeFilter={changeFilter}/>
            </div>
            <div className='row'>
                <DataSort sort={sort} changeSort={changeSort} header={header}/>
            </div>
            <div className='row'>
                <table className='col-sm-12 table-striped table-bordered table-condensed table-hover'>
                    <thead>
                    <tr>
                        {Object.keys(header).map((key) => {
                            return <th key={key}>{header[key]}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.tableRows()}
                    </tbody>
                </table>
            </div>
            <Preloader display={fetching}/>
            <div className='row'>
                <TablePagination pagination={pagination} changePagination={changePagination}/>
            </div>
        </div>
    }
}