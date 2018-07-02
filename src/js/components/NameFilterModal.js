import React from 'react'
import Modal from 'react-responsive-modal'

import { MAP_SET_NAME_FILTER } from '../actions/types.js'


const NameFilterModal = (props) => (
  <Modal classNames={{overlay: 'modal-zindex'}}
    open={props.open}
    onClose={props.closeModal}
    center
  >
    <h1>&nbsp;</h1>
    <h2>Search graves</h2>
    <input onChange={(ev) => (
      props.dispatch({
        type: MAP_SET_NAME_FILTER,
        nameFilter: ev.target.value,
      })
    )}/>
    <ul>
      <li>Task #1</li>
    </ul>
  </Modal>
)

export default NameFilterModal

