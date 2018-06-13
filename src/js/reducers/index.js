import { combineReducers } from 'redux'

import cemeteries from './cemeteries'
import chosenCemetery from './chosen-cemetery'
import map from './map'


export default combineReducers({
  cemeteries,
  chosenCemetery,
  map,
})

