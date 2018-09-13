import state from './CemeteryMap-selector-state.js'
import { plotsSelector } from '../src/js/selectors/CemeteryMap.js'


const PLOT_WITH_TASKS = 'PLOT_WITH_TASKS'

const mapFilterWithNameAndTagFilters = {
  mapFilter: {
    tagFilters: [
      PLOT_WITH_TASKS
    ],
    nameFilter: 'i',
  },
}

const mapFilterWithNameFilter = {
  mapFilter: {
    tagFilters: [],
    nameFilter: 'suonsilmä',
  }
}

const mapFilterWithTagFilters = {
  mapFilter: {
    tagFilters: [
      PLOT_WITH_TASKS
    ],
    nameFilter: ''
  },
}

const mapFilterWithNoFilters = {
  mapFilter: {
    tagFilters: [],
    nameFilter: '',
  },
}

test('Filtering works with no filters.', () => {
  expect(plotsSelector({
    ...state,
    ...mapFilterWithNoFilters,
  })).toHaveLength(21)
})

test('Filtering works with name filter.', () => {
  expect(plotsSelector({
    ...state,
    ...mapFilterWithNameFilter,
  })).toHaveLength(1)
})

test('Filtering works with tag filters.', () => {
  expect(plotsSelector({
    ...state,
    ...mapFilterWithTagFilters,
  })).toHaveLength(5)
})

test('Filtering works with tag and name filters.', () => {
  expect(plotsSelector({
    ...state,
    ...mapFilterWithNameAndTagFilters,
  })).toHaveLength(2)
})

