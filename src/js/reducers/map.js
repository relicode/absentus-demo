import {
  MAP_SET_LOCATION,
  MAP_SET_LOCATION_ORIGINAL,
  MAP_SET_ZOOM_LEVEL,
} from '../actions/types'


const initialLat = 60.16880318693753 // Hietaniemi Cemetery
const initialLon = 24.91838931960289 // Hietaniemi Cemetery
const initialZoom = 18

const initialState = {
  accessToken: 'pk.eyJ1IjoiYW5zc2loZXJyYW5lbiIsImEiOiJjamkxand2dG8wbG9uM3FwaWtzMmcweXF4In0.wMtJBkK3g1ZuSzg7gaXPDw',
  lat: initialLat,
  lon: initialLon,
  maxNativeZoom: 18,
  maxZoom: 21,
  zoom: initialZoom,
}

export default function map(state = initialState, action) {
  const { type, location = {}, zoomLevel } = action
  const { lat, lon, zoom } = location
  switch (type) {
    case MAP_SET_ZOOM_LEVEL:
      return {
        ...state,
        zoom: zoomLevel,
      }
    case MAP_SET_LOCATION:
      return {
        ...state,
        lat,
        lon,
        zoom,
      }
    case MAP_SET_LOCATION_ORIGINAL:
      return {
        ...state,
        lat: initialLat,
        lon: initialLon,
        zoom: initialZoom,
        viewport: {},
      }
    default:
      return state
  }
}

