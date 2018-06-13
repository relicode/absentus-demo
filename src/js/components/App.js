import Modal from 'react-modal'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CemeteryMap from './CemeteryMap'
import Ionicon from 'react-ionicons'
import { MODAL_TOGGLE, SET_LOCATION_ORIGINAL } from '../actions/types'


Modal.setAppElement('#app')
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

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
        <Modal
          isOpen={this.props.showModal}
          style={modalStyles}
          contentLabel="Absentus Modal"
        >
          <h1>HELLO</h1>
          <p>Lorem ipsum dolor amet bicycle rights wolf messenger bag, freegan aesthetic etsy cornhole readymade organic. Listicle chicharrones four dollar toast art party hexagon tbh subway tile mumblecore. Kinfolk tacos cardigan XOXO truffaut vape. Gentrify offal chicharrones kogi photo booth pug stumptown whatever paleo, pok pok godard gochujang. Ramps single-origin coffee bespoke iceland.</p>
          <br />

          <p>Pitchfork paleo echo park four loko wolf ethical narwhal post-ironic humblebrag iceland semiotics. Artisan celiac craft beer hot chicken put a bird on it lumbersexual af VHS tattooed sustainable truffaut bushwick. Gochujang salvia kinfolk mlkshk beard banh mi. Sustainable pabst portland offal banh mi polaroid pop-up.</p>
          <br />

          <ul>
            <li>Todo Item #1</li>
            <li>Todo Item #2</li>
            <li>Todo Item #3</li>
            <li>Todo Item #4</li>
            <li>Todo Item #5</li>
            <li>Todo Item #6</li>
            <li>Todo Item #7</li>
            <li>Todo Item #8</li>
            <li>Todo Item #9</li>
          </ul>
          <br />
          <button onClick={this.handleCloseModal}>Close Modal</button>
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

