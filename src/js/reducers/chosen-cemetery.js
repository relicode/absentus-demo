// import {  } from '../actions/types'


const initialState = {
  country: 'finland',
  city: 'helsinki',
  cemetery: 'hietaniemi',
}

export default function chosenCemetery(state = initialState, action) {
  const { type } = action
  switch (type) {
    case 'xyzåäö':
      return state
    default:
      return state
  }
}

