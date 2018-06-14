import Modal from 'react-responsive-modal'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import { MODAL_TOGGLE, SET_LOCATION_ORIGINAL } from '../actions/types'


class App extends Component {
  backToSquareOne = () => {
    this.props.dispatch({
      type: SET_LOCATION_ORIGINAL,
    })
  }

  handleCloseModal = () => {
    this.props.dispatch({
      type: MODAL_TOGGLE,
      visible: false,
    })
  }

  render() {
    const ioniconProps = { fontSize: '75px' }
    return (
      <div className="app">
        <Modal open={this.props.showModal} onClose={this.handleCloseModal} center>
          <h1>&nbsp;</h1>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <h2>Simple centered modal</h2>
          <ul>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
            <li>Task #1</li>
          </ul>
        </Modal>
        <div className="map">
          <CemeteryMap />
        </div>
        <div className="controls">
          <div className="controls__button" onClick={this.backToSquareOne}>
            <Ionicon icon="md-pin" {...ioniconProps} />
          </div>
          <div className="controls__button"><Ionicon icon="md-calendar" {...ioniconProps} /></div>
          <div className="controls__button"><Ionicon icon="md-hammer" {...ioniconProps} /></div>
          <div className="controls__button"><Ionicon icon="md-star" {...ioniconProps} /></div>
          <div className="controls__button"><Ionicon icon="md-leaf" {...ioniconProps} /></div>
          <div className="controls__button"><Ionicon icon="md-cog" {...ioniconProps} /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, ownProps*/) => ({
  showModal: state.modal.visible,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

