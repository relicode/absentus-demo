import mapFilterReducer, { initialState } from '../src/js/reducers/map-filter.js'
import { MAP_TOGGLE_TAG_FILTER } from '../src/js/actions/types.js'


test('Toggling modal changes state', () => {
  const FILTER_NAME = 'nameFilter'

  const firstState = mapFilterReducer(undefined, initialState)
  expect(firstState.tagFilters.includes(FILTER_NAME)).toBe(false)

  const toggledState = mapFilterReducer(firstState, {
    type: MAP_TOGGLE_TAG_FILTER,
    tagFilter: FILTER_NAME,
  })
  expect(toggledState.tagFilters.includes(FILTER_NAME)).toBe(true)
})

