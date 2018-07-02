import { MAP_SET_NAME_FILTER, MAP_TOGGLE_TAG_FILTER } from '../actions/types'


export const initialState = {
  tagFilters: [],
  nameFilter: '',
}

export default function mapFilter(state = initialState, action) {
  const { nameFilter, type, tagFilter } = action
  switch (type) {
    case MAP_SET_NAME_FILTER:
      return { ...state, nameFilter }
    case MAP_TOGGLE_TAG_FILTER:
      return (
        state.tagFilters.includes(tagFilter) ?
          { ...state, tagFilters: state.tagFilters.filter((f) => f !== tagFilter) } :
          { ...state, tagFilters: [...state.tagFilters, tagFilter] }
      )
    default:
      return state
  }
}

