import { combineReducers } from 'redux'

import cemeteries from './cemeteries'
import chosenCemetery from './chosen-cemetery'
import map from './map'
import modal from './modal'
import plots from './plots'


export default combineReducers({
  cemeteries,
  chosenCemetery,
  map,
  modal,
  plots,
})

