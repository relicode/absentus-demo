import modalReducer from '../src/js/reducers/modal.js'
import { MODAL_TOGGLE } from '../src/js/actions/types.js'


test('Toggling modal changes state', () => {
  const initialState = modalReducer(undefined, {})
  expect(initialState.visible).toBe(false)

  const toggledState = modalReducer(initialState, { type: MODAL_TOGGLE })
  expect(toggledState.visible).toBe(true)

  const moreToggledState = modalReducer(toggledState, { type: MODAL_TOGGLE })
  expect(moreToggledState.visible).toBe(false)

  const evenMoreToggledState = modalReducer(moreToggledState, { type: MODAL_TOGGLE, visible: false })
  expect(evenMoreToggledState.visible).toBe(false)
})

