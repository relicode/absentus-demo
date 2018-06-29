import React, { Component } from 'react'
import { connect } from 'react-redux'

import NameFilterModal from './NameFilterModal.js'
import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import Menu from './Menu'
import {
  MAP_FILTER,
  MAP_SET_LOCATION_ORIGINAL,
  MODAL_TOGGLE
} from '../actions/types'


const NAME_FILTER = 'nameFilter'

class App extends Component {
  backToSquareOne = () => {
    this.props.dispatch({
      type: MAP_SET_LOCATION_ORIGINAL,
    })
  }

  toggleModal = (name, visible) => {
    this.props.dispatch({
      type: MODAL_TOGGLE,
      name,
      visible,
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
        <Menu right >
          <p onClick={this.toggleMapFilter}><Ionicon icon="md-build" {...ioniconProps} /> Plots with tasks</p>
          <p onClick={this.backToSquareOne}><Ionicon icon="md-pin" {...ioniconProps} /> Return to center</p>
          <p onClick={this.toggleModal.bind(this, NAME_FILTER, true)}><Ionicon icon="md-search" {...ioniconProps} /> Search for a grave</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>
        </Menu>
        <NameFilterModal open={this.props.showNameFilterModal} closeModal={this.toggleModal.bind(this, NAME_FILTER, false)} />
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
  showNameFilterModal: state.modal.nameFilter,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

