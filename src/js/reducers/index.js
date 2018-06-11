import { combineReducers } from 'redux'

import alerts from './alerts'
import map from './map'


export default combineReducers({
  alerts,
  map,
})

