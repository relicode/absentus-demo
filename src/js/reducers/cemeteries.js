import initialState from '../../data/cemeteries.json'
// import {  } from '../actions/types'


export default function cemeteriesReducer(state = initialState, action) {
  const { type } = action
  switch (type) {
    case 'xyzåäö':
      return state
    default:
      return state
  }
}

