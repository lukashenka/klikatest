import React, {Component} from 'react'
import TablePagination from '../components/TablePagination';
import DataFilter from '../components/DataFilter';

export default class DataGrid extends Component {

    tableRows() {
        const {tableData} = this.props.dataGrid;
        return tableData.map((columns, index) => {
            var row = Object.keys(columns).map((key) => {
                return <td key={key}>{columns[key]}</td>;
            });
            return <tr key={index}>{row}</tr>;
        });
    }

    render() {
        const {header, pagination, filters} = this.props.dataGrid;
        const {changePagination, loadTable, changeFilter} = this.props;
        return <div>
            <table className='table-striped table-bordered table-condensed table-hover'>
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
            <TablePagination pagination={pagination} loadTable={loadTable} changePagination={changePagination}/>
            <DataFilter filters={filters}  loadTable={loadTable} changeFilter={changeFilter}/>
        </div>


    }


}