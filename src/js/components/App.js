import Modal from 'react-responsive-modal'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import Menu from './Menu'
import {
  MAP_FILTER,
  MAP_SET_LOCATION_ORIGINAL,
  MODAL_TOGGLE
} from '../actions/types'


class App extends Component {
  backToSquareOne = () => {
    this.props.dispatch({
      type: MAP_SET_LOCATION_ORIGINAL,
    })
  }

  handleCloseModal = () => {
    this.props.dispatch({
      type: MODAL_TOGGLE,
      visible: false,
    })
  }

  toggleMapFilter= () => {
    this.props.dispatch({
      type: MAP_FILTER,
    })
  }

  render() {
    const ioniconProps = {
      color: 'gray',
      fontSize: '1.15em',
    }
    return (
      <div className="app">
        <Menu right>
          <p onClick={this.toggleMapFilter}><Ionicon icon="md-build" {...ioniconProps} /> Plots with tasks</p>
          <p onClick={this.backToSquareOne}><Ionicon icon="md-pin" {...ioniconProps} /> Return to center</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>
        </Menu>
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
        <div className="customBar" style={{
          height: '150px',
          backgroundImage: 'url("http://via.placeholder.com/350x150")',
          backgroundSize: '100% 100%'
        }} />
        <div className="map">
          <CemeteryMap />
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

