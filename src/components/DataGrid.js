import React, {Component} from 'react'
import TablePagination from '../components/TablePagination';

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
        const {header, pagination} = this.props.dataGrid;
        const {getPage} = this.props;
        return <div>
            <table className='table-striped table-bordered table-condensed table-hover'>
                <thead>
                <tr>
                    {Object.keys(header).map(function (key) {
                        return <th key={key}>{header[key]}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {this.tableRows()}
                </tbody>
            </table>
            <TablePagination pagination={pagination} getPage={getPage}/>
        </div>


    }


}