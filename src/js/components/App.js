import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Menu from './Menu'
import NameFilterModal from './NameFilterModal.js'
import { MODAL_TOGGLE } from '../actions/types'


const NAME_FILTER_MODAL = 'nameFilter'

class App extends Component {
  toggleModal = (name, visible) => {
    this.props.dispatch({
      type: MODAL_TOGGLE,
      name,
      visible,
    })
  }

  render() {
    return (
      <div className="app">
        <Menu />
        <NameFilterModal
          open={this.props.showNameFilterModal}
          closeModal={this.toggleModal.bind(this, NAME_FILTER_MODAL, false)}
          dispatch={this.props.dispatch}
          nameFilter={this.props.nameFilter}
        />
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
  nameFilter: state.mapFilter.nameFilter,
  showNameFilterModal: state.modal.nameFilter,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

