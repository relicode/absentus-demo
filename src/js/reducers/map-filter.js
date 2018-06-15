import { MAP_FILTER } from '../actions/types'


const PLOT_WITH_TASKS = 'PLOT_WITH_TASKS'

const initialState = null

export default function mapFilter(state = initialState, action) {
  switch (action.type) {
    case MAP_FILTER:
      return state === null ? PLOT_WITH_TASKS : null
    default:
      return state
  }
}

