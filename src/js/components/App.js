import React, { Component } from 'react'
import { connect } from 'react-redux'

import sendAlert from '../actions/alerts'


class App extends Component {
  render() {
    return (
      <div>
        <section className="main-section">
          <div>This should not change</div>
          <div id="app">Not working</div>
        </section>
        <section className="centered-section">
          <div onClick={this.handleClick.bind(this)}>
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
            This should be in the middle.
          </div>
        </section>
      </div>
    )
  }
  handleClick() {
    this.props.sendAlert('not your default alert')
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  return {
    alerts: state.alerts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAlert: (msg) => {
      dispatch(sendAlert(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

