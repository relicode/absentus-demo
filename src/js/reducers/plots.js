import plots from '../../data/plots.json'
// import {  } from '../actions/types'


const initialState = plots

export default function cemeteries(state = initialState, action) {
  const { type } = action
  switch (type) {
    case 'xyzåäö':
      return state
    default:
      return state
  }
}

