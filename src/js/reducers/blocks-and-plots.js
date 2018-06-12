import {  } from '../actions/types'

const initialState = {
  blocks: [
    [
      [60.168902989347544, 24.918092359309178],
      [60.16889498383999, 24.918226501511484],
      [60.168734873279206, 24.918183576006772],
      [60.16874554734086, 24.91803870242824],
    ]
  ]
}

export default function map(state = initialState, action) {
  const { type } = action
  switch (type) {
    case 'xyzåäö':
      return state
    default:
      return state
  }
}

