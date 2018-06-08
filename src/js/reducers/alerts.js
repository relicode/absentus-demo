import { ALERT } from '../actions/types'


const initialState = []

export default function alerts(state = initialState, action) {
  const { type, msg } = action
  switch (type) {
    case ALERT:
      return state.concat(msg)
    default:
      return state
  }
}

