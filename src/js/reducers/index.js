import { combineReducers } from 'redux'
import { reducer as burgerMenu } from 'redux-burger-menu'

import cemeteries from './cemeteries'
import chosenCemetery from './chosen-cemetery'
import map from './map'
import mapFilter from './map-filter'
import modal from './modal'


export default combineReducers({
  burgerMenu,
  cemeteries,
  chosenCemetery,
  map,
  mapFilter,
  modal,
})

