import Ionicon from 'react-ionicons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import { slide as SlideMenu } from 'react-burger-menu'

import {
  MAP_TOGGLE_TAG_FILTER,
  MAP_SET_LOCATION_ORIGINAL,
  MODAL_TOGGLE
} from '../actions/types'


const NAME_FILTER_MODAL = 'nameFilter'
const PLOT_WITH_TASKS_FILTER = 'PLOT_WITH_TASKS'

const ioniconProps = {
  color: 'gray',
  fontSize: '1.15em',
}

const BurgerMenu = reduxBurgerMenu(SlideMenu)

class Menu extends Component {
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
      type: MAP_TOGGLE_TAG_FILTER,
      tagFilter: 'PLOT_WITH_TASKS',
    })
  }

  render() {
    return (
      <BurgerMenu right >
        <p onClick={this.toggleMapFilter}><Ionicon icon="md-build" {...ioniconProps} />
          {this.props.tagFilters.includes(PLOT_WITH_TASKS_FILTER) ? ' All plots' : ' Plots with tasks'}
        </p>
        <p onClick={this.backToSquareOne}><Ionicon icon="md-pin" {...ioniconProps} /> Return to center</p>
        <p onClick={this.toggleModal.bind(this, NAME_FILTER_MODAL, true)}><Ionicon icon="md-search" {...ioniconProps} />
          Search for a grave{this.props.nameFilter.length ? `: ${this.props.nameFilter}` : null}
        </p>
        <p>Item 4</p>
        <p>Item 5</p>
        <p>Item 6</p>
      </BurgerMenu>
    )
  }
}

const mapStateToProps = (state/*, ownProps*/) => ({
  nameFilter: state.mapFilter.nameFilter,
  tagFilters: state.mapFilter.tagFilters,
  showNameFilterModal: state.modal.nameFilter,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

