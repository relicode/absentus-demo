import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import { SET_LOCATION_ORIGINAL } from '../actions/types'


class App extends Component {
  backToSquareOne = () => {
    this.props.dispatch({
      type: SET_LOCATION_ORIGINAL,
    })
  }

  render() {
    return (
      <div className="app">
        <div className="map">
          <CemeteryMap />
        </div>
        <div className="controls">
          <div className="controls__button" onClick={this.backToSquareOne}>
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
}

// const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(null, mapDispatchToProps)(App)

