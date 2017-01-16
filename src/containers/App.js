import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return <div className='row'>
     test
    </div>
  }
}

function mapStateToProps(state) {
  return {
    // user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
