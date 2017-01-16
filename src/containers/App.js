import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as dataGridActions from '../actions/DataGridAction'
import DataGrid from '../components/DataGrid';


class App extends Component {
    render() {
        const {dataGrid, pagination} = this.props;
        console.log(this.props);
        const {getPage} = this.props.dataGridActions;
        return <div className='row'>
            <DataGrid dataGrid={dataGrid} pagination={pagination} getPage={getPage}/>
        </div>
    }
}

function mapStateToProps(state) {

    return {
        dataGrid: {...state.dataGrid}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataGridActions: bindActionCreators(dataGridActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
