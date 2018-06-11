import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import sendAlert from '../actions/alerts'
import { SET_LOCATION } from '../actions/types'


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="map">
          <CemeteryMap />
        </div>
        <div className="controls">
          <div className="controls__button" onClick={() => {
            this.props.dispatch({
              type: SET_LOCATION,
              location: {
                lat: 1,
                lon: 1,
                zoom: 5,
              }
            })
          }}>
            <Ionicon icon="md-pin" fontSize="75px" />
          </div>
          <div className="controls__button"><Ionicon icon="md-calendar" fontSize="75px" /></div>
          <div className="controls__button"><Ionicon icon="md-hammer" fontSize="75px" /></div>
          <div className="controls__button"><Ionicon icon="md-star" fontSize="75px" /></div>
          <div className="controls__button"><Ionicon icon="md-leaf" fontSize="75px" /></div>
          <div className="controls__button"><Ionicon icon="md-cog" fontSize="75px" /></div>
        </div>
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
    dispatch,
    sendAlert: (msg) => {
      dispatch(sendAlert(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

