import { combineReducers } from 'redux'

import cemeteries from './cemeteries'
import chosenCemetery from './chosen-cemetery'
import map from './map'
import mapFilter from './map-filter'
import modal from './modal'
import plots from './plots'


export default combineReducers({
  cemeteries,
  chosenCemetery,
  map,
  mapFilter,
  modal,
  plots,
})

