import modalReducer, { initialState } from '../src/js/reducers/modal.js'
import { MODAL_TOGGLE } from '../src/js/actions/types.js'


test('Toggling modal changes state', () => {
  const MODAL_NAME = 'nameFilter'

  const firstState = modalReducer(undefined, initialState)
  expect(firstState.nameFilter).toBe(false)

  const toggledState = modalReducer(firstState, { type: MODAL_TOGGLE, name: MODAL_NAME })
  expect(toggledState.nameFilter).toBe(true)

  const moreToggledState = modalReducer(toggledState, { type: MODAL_TOGGLE, name: MODAL_NAME })
  expect(moreToggledState.nameFilter).toBe(false)

  const evenMoreToggledState = modalReducer(moreToggledState, {
    name: MODAL_NAME,
    type: MODAL_TOGGLE,
    visible: false,
  })
  expect(evenMoreToggledState.nameFilter).toBe(false)
})

