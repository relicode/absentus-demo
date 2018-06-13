import { MODAL_TOGGLE } from '../actions/types'


const initialState = {
  visible: false,
}

export default function modal(state = initialState, action) {
  const visible = typeof action.visible === 'boolean' ? action.visible : !state.visible
  const { type } = action
  switch (type) {
    case MODAL_TOGGLE:
      return { visible }
    default:
      return state
  }
}

