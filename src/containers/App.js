import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as dataGridActions from '../actions/DataGridAction'
import DataGrid from '../components/DataGrid';


class App extends Component {
    render() {
        const {dataGrid, pagination} = this.props;
        const {loadTable, changePagination, changeFilter, changeSort} = this.props.dataGridActions;
        return <div>
            <DataGrid
                dataGrid={dataGrid}
                pagination={pagination}
                loadTable={loadTable}
                changePagination={changePagination}
                changeFilter={changeFilter}
                changeSort={changeSort}
            />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        dataGrid: state.dataGrid
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataGridActions: bindActionCreators(dataGridActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
