import React from 'react'
import Modal from 'react-responsive-modal'


const NameFilterModal = (props) => (
  <Modal classNames={{overlay: 'modal-zindex'}}
    open={props.open}
    onClose={props.closeModal}
    center
  >
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
)

export default NameFilterModal

