import { MODAL_TOGGLE } from '../actions/types'


export const initialState = {
  nameFilter: false,
}

export default function modal(state = initialState, action) {
  const { type, name } = action
  const visible = typeof action.visible === 'boolean' ? action.visible : !state[name]
  const newState = {...state}
  switch (type) {
    case MODAL_TOGGLE:
      if (!newState.hasOwnProperty(name)) throw new Error('Invalid name: ' + name)
      newState[name] = visible
      return newState
    default:
      return state
  }
}

